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
    scheduler.every(task.interval, task)
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

  def convert_params_to_cron(params)
    time_format = "#{params[:hours]}:#{params[:minutes]}"
    type = params[:frequency_type]

    if %w[min hour days].include?(type)
      expression = type[0] + params[:frequency]
    elsif type == 'month'
      expression = "#{params[:frequency]}mth"
    else # 'daysw'
      days = %i[sunday monday tuesday wednesday thursday friday saturday]
      expression = days[params[:frequency]]
    end
    Cronter.convert_to_cron(expression, time: time_format)
  end

# <ActionController::Parameters {"frequencyType"=>"min", "frequency"=>"1", "jobParams"=>"", "jobTypes"=>"can", "hours"=>"0", "minutes"=>"0"} permitted: true>
  def create_task(params)
    return unless verify_parameters(params)
    # instance = Object.const_get(params[:jobTypes]).new(params[:])
  end
end
