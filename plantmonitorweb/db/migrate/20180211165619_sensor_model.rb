class SensorModel < ActiveRecord::Migration[5.1]
  def change
    create_table :sensor_model do |t|
      t.string :temperature
      t.string :humidity
      t.string :soil_moisture
      t.timestamps
    end
  end
end