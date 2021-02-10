module PlantDashboardHelper
  def sensor_data(kind)
    SensorModel.select(kind, :created_at).where(created_at: 24.hours.ago..Time.now).map { |x| [x.created_at, x.send(kind)] }
  end
end
