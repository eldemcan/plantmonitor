class ChangeSensorModelToSensorModels < ActiveRecord::Migration[5.1]
  def change
      rename_table :sensor_model, :sensor_models
  end
end
