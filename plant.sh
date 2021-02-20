#!/bin/sh
### BEGIN INIT INFO
# Provides:          plant
# Required-Start:    $local_fs $network $named $time $syslog
# Required-Stop:     $local_fs $network $named $time $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Description:       running plant server
### END INIT INFO

. /lib/lsb/init-functions

PATH=/home/pi/.rbenv/shims:/home/pi/.rbenv/bin:/home/pi/.asdf/shims:/home/pi/.asdf/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games

PROJECT=/home/pi/plantmonitor/plantmonitorweb
PIDNAME="${PROJECT}/tmp/pids/server.pid"

# SCRIPT=<COMMAND>
# RUNAS=<USERNAME>

# PIDFILE=/var/run/<NAME>.pid
# LOGFILE=/var/log/<NAME>.log

start() {
  if [ -f /var/run/$PIDNAME ] && kill -0 $(cat /var/run/$PIDNAME); then
    echo 'Service already running' >&2
    return 1
  fi
  echo -n "Starting : "
  export SENSOR=true
  # export SECRET_KEY_BASE=
  export RAILS_SERVE_STATIC_FILES=true
  cd $PROJECT
  bundle exec rails s -e production -d > /tmp/plantservice.log 2>&1
  #bundle exec rails s -e production -d > /tmp/plantservice.log 2>&1
  echo 'Service started'
}

stop() {
  if [ ! -f "$PIDFILE" ] || ! kill -0 $(cat "$PIDFILE"); then
    echo 'Service not running'
    return 1
  fi
  echo 'Stopping service…'
  kill -15 $(cat "$PIDFILE") && rm -f "$PIDFILE"
  echo 'Service stopped'
}

uninstall() {
  echo -n "Are you really sure you want to uninstall this service? That cannot be undone. [yes|No] "
  local SURE
  read SURE
}

uninstall() {
  echo -n "Are you really sure you want to uninstall this service? That cannot be undone. [yes|No] "
  local SURE
  read SURE
  if [ "$SURE" = "yes" ]; then
    stop
    rm -f "$PIDFILE"
    echo "Notice: log file is not be removed: '$LOGFILE'" >&2
    update-rc.d -f <NAME> remove
    rm -fv "$0"
  fi
}

case "$1" in
  start)
    start
    ;;
  stop)
    stop
    ;;
  uninstall)
    uninstall
    ;;
  retart)
    stop
    start
    ;;
  *)
    echo "Usage: $0 {start|stop|restart|uninstall}"
esac
