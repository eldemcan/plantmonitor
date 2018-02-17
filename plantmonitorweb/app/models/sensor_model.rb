class SensorModel < ApplicationRecord
  after_commit :publish_data

  def self.save_sensor_data(sensor_data_json)
    parsed = JSON.parse(sensor_data_json)
    create!(parsed)
  end

  def publish_data
    sensor_data = {
      temperature: temperature,
      humidity: humidity,
      moisture: moisture
    }

    Rails.logger.debug("Publishing: #{sensor_data}")
    ActionCable.server.broadcast('SensorDataChannel', sensor_data)
  end
end