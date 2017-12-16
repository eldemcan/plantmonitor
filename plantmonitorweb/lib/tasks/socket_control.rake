namespace :socket_control do
  desc 'Controlling electric sockets for lights'
  task :socket_control do
    ARGV.each { |a| task a.to_sym do ; end }
    action = ARGV[1]
    socket_number = ARGV[2]
    system "python #{Rails.root}/lib/socket_control.py #{action} #{socket_number}"
  end
end

namespace :shell do
  desc 'Updates crontable for socket tasks'
  task :update do
    sh 'bundle exec whenever --update-crontab socket control'
  end

  desc 'test task just says hi'
  task :hi do
    p 'App'
  end
end
