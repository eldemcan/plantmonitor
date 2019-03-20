require 'test_helper'
require_relative  '../../../app/services/white_rabbit/scheduler_service'

class SchedulerServiceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  module WhiteRabbit
  class MyDummyTask
    attr_reader :interval, :job, :params

    def initialize(interval = '', params)
      @interval = interval
      @params = params
    end

    def call(job, _time)
      @job = job
      p "Hello world, Job_id: #{job.id}"
    end
  end
end

  test 'creates a task with given parameters' do

    require 'byebug'; byebug
    require 'byebug'; byebug
  end
end
