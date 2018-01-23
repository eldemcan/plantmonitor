class PlantDashboardController < ApplicationController
  # http_basic_authenticate_with name: 'can', password: '123'
  protect_from_forgery with: :null_session
  before_action :initialize_service

  def index
    render :index
  end

# {
# 	"socket": {
# 		"action": "on",
# 		"socket_number": 1
# 	}
# }

  def control_socket
    allowed_params = socket_params
    @electric_socket_service.change_state_of_socket(allowed_params.first, allowed_params.second)

    head :ok
  end

  def receive_sensor_data
    allowed_params = sensor_params

    logger.info "Incoming sensor prameters #{allowed_params}"
    ActionCable.server.broadcast('SensorDataChannel', allowed_params)
  end

  private

  def initialize_service
    @electric_socket_service = ElectricSocketService.new
  end

  def socket_params
    params.require(:socket).require(%i[action socket_number])
  end

  def sensor_params
    params.permit(%i[event data published_at coreid])
  end
end
