class ElectricSocketService

  def initialize
    @@socket = PiMote.new if Feature.active?(:gpio)
  end

  def change_state_of_socket(state, socket_number)
    @@socket.send(get_command(state), socket_number) if Feature.active?(:gpio)
    SocketModel.update_state(socket_number, state)
  end

  def get_state_of_socket(socket_number)
    Rails.logger.info("[#{self.class}] Checking state of socket for #{socket_number}")
    SocketModel.find(socket_number).state
  end

  def get_command(state)
    ('switch_' + state).to_sym
  end
end
