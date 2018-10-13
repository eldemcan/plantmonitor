# TODO engine
class RabbitwatchController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    render :index
    # render json: get_task_names
  end

  def task_types
    render json: task_names
  end

  def create
    filtered_params = create_job_params
    SchedulerService.create_task(filtered_params)

    head :ok
  end

  def fetch_jobs
    render json: TaskModel.all
  end

  def destroy_job
    Rails.logger.info("Here I am #{params.inspect}")
    job_id = params_for_destroy_job[:jobId]
    SchedulerService.kill_task(job_id)
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

  def params_for_destroy_job
    params.permit(:jobId)
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
