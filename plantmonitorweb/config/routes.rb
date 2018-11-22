Rails.application.routes.draw do

  # namespace :rabbitwatch do
  #   match 'index', via: [:get], action: 'index'
  #   match 'tasks', via: [:get], action: 'tasks'
  #   match 'create', via: [:post], action: 'create'
  #   match 'fetch_jobs', via: [:get], action: 'fetch_jobs'
  # end

  get 'dashboard', action: :index, controller: 'plant_dashboard'
  get 'dashboard/historical_data', action: :historical_data, controller: 'plant_dashboard'
  get 'dashboard/socket_state', action: :socket_state, controller: 'plant_dashboard'
  post 'dashboard', action: :control_socket, controller: 'plant_dashboard'
  post 'send_data', action: :receive_sensor_data, controller: 'plant_dashboard'

  mount WhiteRabbit::Engine => '/white_rabbit'
end
