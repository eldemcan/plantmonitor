# frozen_string_literal: true

require 'rails_helper'

SingleCov.covered! file: "white_rabbit/app/services/white_rabbit/scheduler_service.rb"
# SingleCov.covered! file: "#{WhiteRabbit::Engine.root}/app/services/white_rabbit/scheduler_service.rb"
# SingleCov.covered!
module WhiteRabbit
  class MyDummyTask
    attr_reader :interval, :job, :params

    def initialize(interval = '', params)
      @interval = interval
      @params = params
    end

    # duck type
    def call(_job, _time)
      p 'Hi'
    end
  end
end

describe WhiteRabbit::SchedulerService do
  it 'works' do
    params = { frequencyType: 'min', frequency: 1, jobParams: '', jobTypes: 'MyDummyTask' }
    # WhiteRabbit::SchedulerService.create_task(params)
    # WhiteRabbit::SchedulerService.stubs(:schedule_task).returns(1)
    require 'byebug'; byebug
    p 'hello world'
  end
end
