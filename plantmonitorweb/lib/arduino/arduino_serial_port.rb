# require 'serialport'

module Arduino
  class ArduinoSerialPort

    def self.start_port(given_opt = {})
      @@serial_port ||= begin
                          opt = {
                            port: '',
                            baud_rate: 9600,
                            data_bits: 8,
                            stop_bits: 1,
                            sleep_time: 10,
                          }

                          opt = opt.merge(given_opt) if defined? given_opt
                          @@sleep_time = opt[:sleep_time]
                          puts "Port connected #{port_connected?(opt[:port])}"
                          return nil unless port_connected?(opt[:port])

                          SerialPort.new(opt[:port], opt[:baud_rate], opt[:data_bits], opt[:stop_bits], SerialPort::NONE)
                        end
    end

    def self.start_writing
      writing_thread = Thread.new do
        loop do
          @@serial_port.flush_output
          @@serial_port.write('r')
          sleep @@sleep_time
        end
      end

      writing_thread
    end

    def self.start_reading
      sensor_data = nil
      while sensor_data.nil?
        sleep @@sleep_time
        sensor_data = @@serial_port.readline
      end

      begin
        JSON.parse(sensor_data)
      rescue :: StandardError => _
        ''
      end
    end

    def self.close_port
      return unless defined? @@serial_port
      @@serial_port.flush_output
      @@serial_port.close
    end

    def self.port_connected?(port)
      return true if Dir.glob(port).count == 1
      p "Did not found device #{port}"
    end
  end
end
