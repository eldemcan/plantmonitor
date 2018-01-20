require 'serialport'

# TODO Add timeout and put code into class structure
def self.port_connected?(port)
  return true if Dir.glob(port).count == 1
end

port_str = '/dev/cu.wchusbserial1420'
baud_rate = 9600
data_bits = 8
stop_bits = 1
sleep_time = 2

serial_port = SerialPort.new(port_str, baud_rate, data_bits, stop_bits, SerialPort::NONE)

puts 'Arduino is connected' if port_connected?(port_str)

Thread.new do
  loop do
    serial_port.flush_output
    serial_port.write('r')
    sleep sleep_time
  end
end

loop do
  p serial_port.readline
  sleep sleep_time
end

serial_port.close
