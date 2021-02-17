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
      Rake::Task['arduino:mock_sensor'].invoke if Rails.env.development? && ENV.fetch('MSENSOR', false)
      Rake::Task['arduino:sensor'].invoke if Rails.env.production? && ENV.fetch('SENSOR', false)
      # initialize_sensor_reading if Feature.active?(:gpio)
      # mock_sensor_reading if Rails.env.development?
      # initialize_sensor_reading if Rails.env.production?
    end

    at_exit do
      Thread.list.each do |t|
        Thread.kill(t)
      end
    end
  end
end
