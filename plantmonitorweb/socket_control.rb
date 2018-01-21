require 'pi_piper'

class Energenie
  include PiPiper

  ON_SIGNALS = {
    0 => [true, true, false, true],
    1 => [true, true, true, true],
    2 => [false, true, true, true],
    3 => [true, false, true, true],
    4 => [false, false, true, true]
  }.freeze

  OFF_SIGNALS = {
    0 => [false, false, true, true],
    1 => [true, true, true, false],
    2 => [false, true, true, false],
    3 => [true, false, true, false],
    4 => [false, false, true, false]
  }.freeze

  def initialize
    setup_pins
  end

  def setup_pins
    @signal_pins = [17, 22, 23, 27].map do |pin|
      PiPiper::Pin.new(:pin => pin, :direction => :out)
    end

    @on_off_pin = PiPiper::Pin.new(:pin => 24, :direction => :out)
    @enable_pin = PiPiper::Pin.new(:pin => 25, :direction => :out)

    @on_off_pin.off
    @enable_pin.off

    @signal_pins.map(&:off)
  end

  def change_plug_state(socket, signals_hash)
    socket_signals = signals_hash[socket]

    @signal_pins.zip(socket_signals).each do |pin, signal|
      signal ? pin.on : pin.off
    end
    sleep(0.1)
    @enable_pin.on
    sleep(0.25)
    @enable_pin.off
  end

  def switch_on(socket = 0)
    change_plug_state(socket, ON_SIGNALS)
  end

  def switch_off(socket = 0)
    change_plug_state(socket, OFF_SIGNALS)
  end
end
