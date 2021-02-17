# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_15_231714) do

  create_table "sensor_models", force: :cascade do |t|
    t.integer "temperature"
    t.integer "humidity"
    t.integer "moisture"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "socket_models", force: :cascade do |t|
    t.integer "socket_id"
    t.string "socket_label", null: false
    t.boolean "state"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["socket_id"], name: "index_socket_models_on_socket_id", unique: true
  end

  create_table "white_rabbit_task_models", force: :cascade do |t|
    t.string "job_class"
    t.string "job_id"
    t.string "interval"
    t.string "params"
  end

end
