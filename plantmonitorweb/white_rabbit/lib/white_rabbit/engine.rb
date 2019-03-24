require 'rubygems'
require 'rufus-scheduler'
require 'cronter'
require 'sqlite3'
# require 'factory_bot_rails'

module WhiteRabbit
  class Engine < ::Rails::Engine
    isolate_namespace WhiteRabbit

    config.generators do |g|
      g.test_framework :rspec
      g.fixture_replacement :factory_bot
      g.factory_bot dir: 'spec/factories'
    end


  # config.factory_bot.definition_file_paths =
    # File.expand_path('../factories/white_rabbit', __FILE__) if defined?(FactoryBotRails)

  # require 'byebug';byebug

  # config.factory_bot.definition_file_paths =
  #  '/Users/celdem/Desktop/recovery/plantmonitor/plantmonitorweb/white_rabbit/spec/factories/white_rabbit' if defined?(FactoryBotRails)

  # config.factory_bot.find_definitions
  end
end
