# frozen_string_literal: true

class SchedulerService
  def self.setup
    p 'Setting scheduler'
    @scheduler = Rufus::Scheduler.new
  end

  class << self
    attr_reader :scheduler
  end

  def self.schedule_task(task)
    scheduler.cron(task.interval, task)
  end

  def self.verify_parameters(params)
    ranges = {
      min: 0..59,
      hour: 0..23,
      days: 1..31,
      month: 1..12,
      daysw: 0..6
    }

    frequency_type = ranges[params[:frequencyType].to_sym]

    !frequency_type.nil? &&
      frequency_type.include?(params[:frequency].to_i) &&
      ranges[:min].include?(params[:minutes].to_i) &&
      ranges[:hour].include?(params[:hours].to_i)
  end

  def self.kill_task(job_id)
    job = scheduler.job(job_id)
    job.kill
    task = TaskModel.find_by(job_id: job_id)
    task.destroy
  end

  def self.convert_params_to_cron(params)
    type = params[:frequencyType]
    frequency = params[:frequency].to_i
    if %w[min hour days].include?(type)
      exp = frequency.to_s + type[0]
    elsif type == 'month'
      exp = %i[jan feb mar apr may jun jul aug sep oct nov dec][frequency]
    else # 'daysw'
      exp = %i[sunday monday tuesday wednesday thursday friday saturday][frequency]
    end

    if params.key?(:hours) && params.key?(:minutes)
      time_format = "#{params[:hours]}:#{params[:minutes]}"
      Cronter.convert_to_cron(exp, time: time_format)
    else
      Cronter.convert_to_cron(exp)
    end
  end

  def self.create_task(params)
    return unless verify_parameters(params)

    cron_exp = convert_params_to_cron(params)
    task = Object.const_get(params[:jobTypes].capitalize).new(cron_exp, params[:jobParams])
    job_id = schedule_task(task)
    TaskModel.save_task(task, job_id)
  end
end
