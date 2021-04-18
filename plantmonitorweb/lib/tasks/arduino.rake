

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
        Rails.logger.debug "Sensor data #{sensor_data}"
        SensorModel.create!(sensor_data) if validate_sensor_reading(sensor_data)
      rescue ThreadError => e
        print_exception(e, true)
        puts "Size of the thread list #{Thread.list.size}"
      end
    end
end

def self.validate_sensor_reading(sensor_data)
  return false if sensor_data.blank?
  return false unless sensor_data.is_a?(Hash)

  keys = [:temperature, :humidity, :moisture]

  sensor_data = sensor_data.with_indifferent_access

  keys.all? { |k|  sensor_data.key?(k) }
end

def self.print_exception(exception, explicit)
  puts "[#{explicit ? 'EXPLICIT' : 'INEXPLICIT'}] #{exception.class}: #{exception.message}"
  puts exception.backtrace.join("\n")
end