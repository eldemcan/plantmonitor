# TODO: move to engine
class CreateTaskModel < ActiveRecord::Migration[5.1]
  def change
    create_table :task_models do |t|
      t.string :description
      t.string :job_class
      t.string :job_id
      t.string :interval
      t.string :params
    end
  end
end
