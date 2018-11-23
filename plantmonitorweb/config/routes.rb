Rails.application.routes.draw do
  get 'dashboard', action: :index, controller: 'plant_dashboard'
  get 'dashboard/historical_data', action: :historical_data, controller: 'plant_dashboard'
  get 'dashboard/socket_state', action: :socket_state, controller: 'plant_dashboard'
  post 'dashboard', action: :control_socket, controller: 'plant_dashboard'
  post 'send_data', action: :receive_sensor_data, controller: 'plant_dashboard'

  mount WhiteRabbit::Engine => '/white_rabbit'
end
