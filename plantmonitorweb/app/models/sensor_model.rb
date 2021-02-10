class SensorModel < ApplicationRecord
  after_commit :publish_data, on: :create

  def self.save_sensor_data(sensor_data_json)
    parsed = JSON.parse(sensor_data_json)
    create!(parsed)
    # SensorDataChannel.broadcast_to(parsed)
    # publish_data
  end

  def publish_data
    sensor_data = {
      temperature: temperature,
      humidity: humidity,
      moisture: moisture
    }

    Rails.logger.debug("Publishing: #{sensor_data}")
    ActionCable.server.broadcast('SensorDataChannel', sensor_data)
    # SensorDataChannel.broadcast_to(sensor_data)
    # ActionCable.server.broadcast('SensorDataChannel', sensor_data)
  end
end