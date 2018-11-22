require_dependency "white_rabbit/application_controller"

module WhiteRabbit
  class CanController < ApplicationController
    def index
      Rails.logger.info("helloo world from the engine ")
      render :index
    end
  end
end
