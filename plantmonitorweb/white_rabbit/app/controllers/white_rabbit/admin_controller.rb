require_dependency "white_rabbit/application_controller"

module WhiteRabbit
  class AdminController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      render :index
      # render json: get_task_names
    end

    def task_types
      render json: task_names || ''
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
      job_id = params_for_destroy_job[:jobId]
      SchedulerService.kill_task(job_id)
    end

    private

    def task_names
      root_path = Rails.root.join('white_rabbit', 'app', 'schedule', 'white_rabbit')
      file_names = Dir.entries(root_path)
      file_names
        .select { |fn| File.extname(fn) == '.rb' }
        .map { |fn| fn.gsub('.rb', '').camelize }
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
end
