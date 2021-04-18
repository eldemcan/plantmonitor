module WhiteRabbit
  class SocketControl
    attr_reader :interval, :job, :params

    def initialize(interval = '', params)
      @interval = interval
      @params = params
    end

    # params = 2,off -> socket number and action
    def call(job, _time)
      @job = job

      socket, action = params.split(',')
      sc = PiMote::Sockets.new

      if action == 'on'
        sc.switch_on(socket.to_i)
      else
        sc.switch_off(socket.to_i)
      end
    end
  end
end