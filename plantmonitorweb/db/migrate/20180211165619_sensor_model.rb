class SensorModel < ActiveRecord::Migration[5.1]
  def change
    create_table :sensor_models do |t|
      t.integer :temperature
      t.integer :humidity
      t.integer :moisture
      t.timestamps
    end
  end
end