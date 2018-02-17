class SocketModel < ApplicationRecord
  self.primary_key = 'socket_id'

  def self.update_state(socket_number, state)
    socket = find(socket_number)
    socket.update_attributes(state: state)
  end
end
