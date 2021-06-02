

namespace :arduino do
  desc "This task does nothing"
  task mock_sensor: :environment do
    mock_sensor_reading
  end

  desc "Start reading from arduino board"
  task sensor: :environment do
    fork do
      initialize_sensor_reading
    end
  end

  desc "Close port"
  task close_port: :environment do
    Arduino::ArduinoSerialPort.close_port
  end
end

def self.mock_sensor_reading
    Thread.new do
      loop do
        mock_data = { temperature: rand(12), humidity: rand(31), moisture: rand(34) }
        Rails.logger.info "Saving mock data with #{mock_data}"
        SensorModel.save_sensor_data(mock_data.to_json)
        sleep 60
      end
    end
end

def self.initialize_sensor_reading
  yaml_config = YAML.load_file("#{Rails.root.to_s}/config/config.yml")
  port = yaml_config['arduino']['serial_port']
  sleep_time = yaml_config['arduino']['read_period'].to_i
  Rails.logger.debug "Initializing arduino on port #{port}"
  Arduino::ArduinoSerialPort.close_port
  Arduino::ArduinoSerialPort.start_port(port: port, sleep_time: sleep_time)
    loop do
      begin
        Arduino::ArduinoSerialPort.start_writing
        sensor_data = Arduino::ArduinoSerialPort.start_reading
        Rails.logger.debug("Sensor data is nil") if sensor_data.nil? || sensor_data.blank?
        Rails.logger.debug("Sensor data #{sensor_data}") unless sensor_data.nil?
        SensorModel.create!(sensor_data) if validate_sensor_reading(sensor_data)
      rescue ThreadError => e
        print_exception(e, true)
        Rails.logger.error("Size of the thread list #{Thread.list.size}")
      end
    end
end

def self.validate_sensor_reading(sensor_data)
  if sensor_data.blank?
    Rails.logger.debug("Sensor data is blank")
    return false
  elsif sensor_data.is_a?(Hash) == false
    Rails.logger.debug("Sensor data isn't hash #{sensor_data}")
    return false
  else
    keys = [:temperature, :humidity, :moisture]

    sensor_data = sensor_data.with_indifferent_access

    res = keys.all? { |k|  sensor_data.key?(k) }

    Rails.logger.debug("Sensor data is valid?: #{res}")

    res
  end
end

def self.print_exception(exception, explicit)
  Rails.logger.error("[#{explicit ? 'EXPLICIT' : 'INEXPLICIT'}] #{exception.class}: #{exception.message}")
  Rails.logger.error(exception.backtrace.join("\n"))
end