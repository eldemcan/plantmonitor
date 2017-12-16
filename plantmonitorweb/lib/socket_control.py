from energenie import switch_on, switch_off
import sys


def switch_on(socket):
    print('Switching on', socket)
    switch_on(socket)
    return True


def switch_off(socket):
    print('Switching off', socket)
    switch_off(socket)
    return True


def main():
    if (len(sys.argv) >= 3):
        action = sys.argv[1].lower()
        socket = int(sys.argv[2])
        if (action == 'on'): switch_on(socket)
        if (action == 'off'): switch_off(socket)
    else:
        print('Wrong number of arguments')


if __name__ == "__main__":
    main()
