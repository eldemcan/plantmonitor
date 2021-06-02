#!/bin/bash

#PREP
USER_HOST="pi@192.168.178.34"
REMOTE_DIR="/home/pi/plantmonitor"
RAILS_DIR="/home/pi/plantmonitor/plantmonitorweb"
set -ue
# set -e #exit on any error
cd plantmonitorweb
bundle exec rake tmp:clear
#precompile assets
bundle exec rake assets:precompile
#copy files
cd ..
rsync -rvuz ./ ${USER_HOST}:${REMOTE_DIR} --exclude='.git/' --exclude='log/' --exclude='tmp' --delete
#clear tmp files after precompile
# bundle exec rake tmp:clear

#REMOTE
#bundle install
# ssh ${USER_HOST} 'cd ${RAILS_DIR} && bundle install'
#database migrate
# ssh ${USER_HOST} 'cd ${RAILS_DIR} && bundle exec rake db:migrate RAILS_ENV="production"'
#clear temp files
# ssh ${USER_HOST} "cd ${RAILS_DIR} && bundle exec rake tmp:clear"
#clear log files
# ssh ${USER_HOST} "cd ${RAILS_DIR} && bundle exec rake log:clear"
#restart app
# ssh ${USER_HOST} 'touch ${REMOTE_DIR}/tmp/restart.txt'

# ssh ${USER_HOST} 'touch ${REMOTE_DIR}/tmp/restart.txt'
ssh ${USER_HOST} 'sudo service plant restart'
echo "Deploy Successful!"