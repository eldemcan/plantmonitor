class TaskModel < ApplicationRecord
  def self.save_task(task, job_id)
    create(
      job_class: task.class.to_s,
      job_id: job_id,
      interval: task.interval,
      params: task.params
    )
  end
end
