# This migration comes from white_rabbit (originally 20181123103644)
class CreateWhiteRabbitKitties < ActiveRecord::Migration[5.2]
  def change
    create_table :white_rabbit_kitties do |t|
      t.string :name

      t.timestamps
    end
  end
end
