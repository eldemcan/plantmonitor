require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Plantmonitorweb
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    config.autoload_paths << "#{Rails.root}/lib"

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.after_initialize do
      Rails.application.load_tasks # <---
      Rails.logger.debug "Rails Env: #{Rails.env.development?} Sensor variable: #{ENV['SENSOR']}"
      if Rails.env.development? && ENV.fetch('MSENSOR', false)
        Rails.logger.debug("Running in fake sensor mode")
        Rake::Task['arduino:mock_sensor'].invoke
      end

      if Rails.env.production? && ENV.fetch('SENSOR', false)
        Rails.logger.debug("Trying to connect with Arduino")
        Rake::Task['arduino:sensor'].invoke
      end
    end

    at_exit do
      Rake::Task['arduino:close_port'].invoke
      Thread.list.each do |t|
        Thread.kill(t)
      end
    end
  end
end
