require 'serialport'

class ArduinoSerialPort
  SLEEP_TIME_SECONDS = 4

  def self.start_port(given_opt = {})
    @@serial_port ||= begin
                        opt = {
                          port: '/dev/cu.wchusbserial1420', # TODO get port from config file
                          baud_rate: 9600,
                          data_bits: 8,
                          stop_bits: 1,
                          sleep_time: 2,
                        }

                        opt = opt.merge(given_opt) if defined? given_opt

                        return nil unless port_connected?(opt[:port])

                        SerialPort.new(opt[:port], opt[:baud_rate], opt[:data_bits], opt[:stop_bits], SerialPort::NONE)
                      end
  end

  def self.start_writing
    writing_thread = Thread.new do
      loop do
        @@serial_port.flush_output
        @@serial_port.write('r')
        sleep SLEEP_TIME_SECONDS
      end
    end

    writing_thread
  end

  def self.start_reading
    sensor_data = nil
    while sensor_data.nil?
      sleep SLEEP_TIME_SECONDS
      sensor_data = @@serial_port.readline
    end

    sensor_data
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
