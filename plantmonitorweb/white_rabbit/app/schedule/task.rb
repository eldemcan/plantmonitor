# frozen_string_literal: true

module WhiteRabbit
  class Task
    attr_reader :interval, :job, :params

    def initialize(interval = '', params)
      @interval = interval
      @params = params
    end

    def call(job, _time)
      @job = job
      Rails.logger.info('[HELLO WORLD]')
      p "Hello world, Job_id: #{job.id}"
    end
  end
end
