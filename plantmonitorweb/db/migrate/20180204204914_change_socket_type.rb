class ChangeSocketType < ActiveRecord::Migration[5.1]
  def change
    change_column :socket_models, :state, :boolean
  end
end
