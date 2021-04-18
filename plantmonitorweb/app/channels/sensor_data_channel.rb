class SensorDataChannel < ApplicationCable::Channel
  def subscribed
    stream_from params[:channel]
    logger.info 'Subscribed to ' + params[:channel]
  end


  # def unsubscribed
  #   # Any cleanup needed when channel is unsubscribed
  # end
end