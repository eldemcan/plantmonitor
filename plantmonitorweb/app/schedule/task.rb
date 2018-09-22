# TODO: move to engine
class Task
  attr_reader :interval, :job, :params

  def initialize(interval = '', params)
    @interval = interval
    @params = params
  end

  def call(job, time)
    @job = job

    p "
         Job_id: #{job.id},
      "
  end
end
