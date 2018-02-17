class SensorModelColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :sensor_models, :soil_moisture, :moisture
 end
end
