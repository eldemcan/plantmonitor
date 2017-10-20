class CreateSocketModels < ActiveRecord::Migration[5.1]
  def change
    create_table :socket_models do |t|
      t.integer :socket_id
      t.string :socket_label, null: false
      t.string :state

      t.index :socket_id, unique: true
      t.timestamps
    end
  end
end
