# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

SocketModel.delete_all
SocketModel.create(socket_id: 1, socket_label: 'light', state: false)
SocketModel.create(socket_id: 2, socket_label: 'unnamed', state: false)
