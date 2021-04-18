module WhiteRabbit
    class WaterPlant
      WATER_DURATION = 5

      attr_reader :interval, :job, :params

      def initialize(interval = '', params)
        @interval = interval
        @params = params
      end

      # params = 2,off -> socket number and action
      def call(job, _time)
        @job = job
        socket = params
        sc = PiMote::Sockets.new

        sc.switch_on(socket.to_i)
        Thread.new do
          sleep WATER_DURATION
          sc.switch_off(socket.to_i)
        end
      end
    end
end