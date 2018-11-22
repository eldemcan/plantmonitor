Rails.application.routes.draw do
  get 'rabbitwatch/index',        action: :index,       controller: 'rabbitwatch'
  get 'rabbitwatch/tasks',        action: :task_types,  controller: 'rabbitwatch'
  post 'rabbitwatch/create',      action: :create,      controller: 'rabbitwatch'
  get 'rabbitwatch/fetch_jobs',   action: :fetch_jobs,  controller: 'rabbitwatch'
  post 'rabbitwatch/destroy_job', action: :destroy_job, controller: 'rabbitwatch'

  get 'dashboard', action: :index, controller: 'plant_dashboard'
  get 'dashboard/historical_data', action: :historical_data, controller: 'plant_dashboard'
  get 'dashboard/socket_state', action: :socket_state, controller: 'plant_dashboard'
  post 'dashboard', action: :control_socket, controller: 'plant_dashboard'
  post 'send_data', action: :receive_sensor_data, controller: 'plant_dashboard'

  mount WhiteRabbit::Engine => "/white_rabbit"
end
