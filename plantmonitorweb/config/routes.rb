Rails.application.routes.draw do
  get 'dashboard', action: :index, controller: 'plant_dashboard'
  post 'dashboard', action: :control_socket, controller: 'plant_dashboard'
  post 'send_data', action: :receive_sensor_data, controller: 'plant_dashboard'
end
