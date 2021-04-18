module WhiteRabbit
  class CleanData
    attr_reader :interval, :job, :params

    def initialize(interval = '', params)
      @interval = interval
      @params = params
    end

    def call(job, _time)
      @job = job
      Rails.logger.info("[#{self.class}] Removing historical data")
      SensorModel.delete_all
    end
  end
end