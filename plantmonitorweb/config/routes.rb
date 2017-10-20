Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get 'profile', to: 'users#show'
  # namespace :plant_dashboard do
  #   get 'dashboard', action: :index
  # end
  get 'dashboard', action: :index, controller: 'plant_dashboard'
  post 'dashboard', action: :control_socket, controller: 'plant_dashboard'
  post 'send_data', action: :receive_sensor_data, controller: 'plant_dashboard'
end
