

namespace :arduino do
  desc "This task does nothing"
  task mock_sensor: :environment do
    mock_sensor_reading
  end

  desc "Start reading from arduino board"
  task sensor: :environment do
    initialize_sensor_reading
  end
end

def self.mock_sensor_reading
    Thread.new do
      loop do
        mock_data = { temperature: rand(12), humidity: rand(31), moisture: rand(34) }
        Rails.logger.info "Saving mock data with #{mock_data}"
        SensorModel.save_sensor_data(mock_data.to_json)
        sleep 10
      end
    end
end

def self.initialize_sensor_reading
  yaml_config = YAML.load_file("#{Rails.root.to_s}/config/config.yml")
  port = yaml_config['arduino']['serial_port']
  Rails.logger.info "Initializing arduino on port #{port}"
  Arduino::ArduinoSerialPort.close_port
  Arduino::ArduinoSerialPort.start_port(port: port)
  main_thread = Thread.new do
    loop do
      Arduino::ArduinoSerialPort.start_writing
      sensor_data = Arduino::ArduinoSerialPort.start_reading
      Rails.logger.info "Sensor data #{sensor_data}"
      SensorModel.create!(sensor_data) unless sensor_data.blank?
      sleep Arduino::ArduinoSerialPort::SLEEP_TIME_SECONDS + 1
    end
  end
  main_thread
end