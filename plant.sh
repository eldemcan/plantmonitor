#!/bin/bash
#
#       /etc/rc.d/init.d/
#
#
#
#
#

# Source function library.
. /etc/init.d/functions

start() {
        echo -n "Starting : "
        export SENSOR=true
        bundle exec rails s -e production -p 3213 -d

        return
}

stop() {
        echo -n "Shutting down : "
        kill -9 3213
        return
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    status)

        ;;
    restart)
        stop
        start
        ;;
    reload)

tart)

        [ -f /var/lock/subsys/ ] && restart || :
    probe)

        ;;
    *)
        echo "Usage:  {start|stop|status|reload|restart[|probe]"
        exit 1
        ;;
esac
exit $?