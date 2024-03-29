class CreateSocketModels < ActiveRecord::Migration[6.0]
  def change
    create_table :socket_models do |t|
      t.integer :socket_id
      t.string :socket_label, null: false
      t.boolean :state

      t.index :socket_id, unique: true
      t.timestamps
    end
  end
end
