class PlantDashboardController < ApplicationController
  # TODO add socet control view
  before_action :initialize_service, ony: %i[control_socket socket_state]

  def index
    render :index
  end

  # just to test action cable
  def broadcast
    ActionCable.server.broadcast('SensorDataChannel', {soilMoisture:'can' , temperature: '23' , humidity: '65'})

    head :ok
  end

  def control_socket
    allowed_params = control_socket_params
    @electric_socket_service.change_state_of_socket(allowed_params.first, allowed_params.second)

    head :ok
  end

  def historical_data
    sensor_data = SensorModel.select(
      :temperature,
      :moisture,
      :humidity,
      'TIME(created_at) as record_time'
      )
    # sensor_data = SensorModel.select( :temperature, :moisture, :humidity, 'TIME(created_at) as record_time')
    # render json: sensor_data
  end

  def socket_state
    unless socket_state_params.nil?
      state = @electric_socket_service.get_state_of_socket(socket_state_params)

      render json: { state: state }
    end
  end

  private

  def initialize_service
    @electric_socket_service = ElectricSocketService.new
  end

  def control_socket_params
    params.require(:socket).require(%i[state socket_number])
  end

  def socket_state_params
    params.permit(:socket_number)[:socket_number]
  end
end
