require 'rubygems'
require 'rufus-scheduler'
require 'cronter'
require 'sqlite3'

module WhiteRabbit
  class Engine < ::Rails::Engine
    isolate_namespace WhiteRabbit


    config.generators do |g|
      g.test_framework :rspec
      g.fixture_replacement :factory_bot
      g.factory_bot dir: 'spec/factories'
    end
  end
end
