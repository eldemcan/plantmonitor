require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Plantmonitorweb
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.after_initialize do
      Rails.application.load_tasks # <---
      Rake::Task['sensor_data:delete_sensor_data'].invoke
      initialize_sensor_reading
    end

    def self.initialize_sensor_reading
      p 'Initialize ArduinoSerialPort'
      ArduinoSerialPort.close_port
      ArduinoSerialPort.start_port
      main_thread = Thread.new do
        loop do
          ArduinoSerialPort.start_writing
          sensor_data = ArduinoSerialPort.start_reading
          p "Collecting sensor data #{sensor_data}"
          SensorModel.save_sensor_data(sensor_data)
          sleep ArduinoSerialPort::SLEEP_TIME_SECONDS + 1
        end
      end
      main_thread
    end

    at_exit do
      p 'Sensor device cleanup'
      Thread.list.each do |t|
        Thread.kill(t)
      end
      sleep 1
      ArduinoSerialPort.close_port
    end
  end
end
