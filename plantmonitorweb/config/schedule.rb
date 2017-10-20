# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever

set :chronic_options, hours24: true

# TODO: Make this part configurable
# 12 am midnight
# 12 pm noon
every :day, at: '12:00' do
 rake 'socket_control:socket_control off 1'
end

every :day, at: '00:10' do
 rake 'socket_control:socket_control on 1'
end
