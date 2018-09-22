# TODO engine
class RabbitwatchController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render :index
    # render json: get_task_names
  end

  def task_types
    # render json: [ { display_value: 'can', value: 0 }, { display_value: 'eldem', value: 1 } ]
    render json: ['can', 'eldem']
  end

  def create
    filtered_params = create_job_params
    Rails.logger.info "incoming: #{filtered_params.inspect}"

    Rails.logger.info "correct: #{SchedulerService.verify_parameters(filtered_params)}"
    # scheduler = SchedulerService.scheduler
    # p "object_id: #{scheduler.object_id}"
    # task = Task.new('10s', 'can eldem')
    # job_id = SchedulerService.schedule_task(task)
    # TaskModel.save_task(task, job_id)
    # job = scheduler.job(job_id)
    # p "return value: #{job_id}"

    head :ok
  end

  def fetch_jobs
    render json: TaskModel.all
  end

  private
  # TODO: engine
  def task_names
    root_path = Rails.root.join('app', 'schedule')
    file_names = Dir.entries(root_path)
    ruby_files = file_names
                 .select { |fn| File.extname(fn) == '.rb' }
                 .map { |fn| fn.gsub('.rb', '') }
    ruby_files
  end

  def create_job_params
    params.permit(
      :frequencyType,
      :frequency,
      :jobParams,
      :jobTypes,
      :hours,
      :minutes
    )
  end

end
