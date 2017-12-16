class ElectricSocketService

  def change_state_of_socket(state, socket_number)
    is_state_changed = false
    result = true
    result = system "python #{Rails.root}/lib/socket_control.py #{state} #{socket_number}" if Feature.active?(:gpio)

    if result
      electric_socket = SocketModel.find(socket_number)
      is_state_changed = electric_socket.update_attributes(state: state)
    end
    is_state_changed
  end
end
