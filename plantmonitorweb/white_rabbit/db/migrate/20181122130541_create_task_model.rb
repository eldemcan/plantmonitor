# frozen_string_literal: true

class CreateTaskModel < ActiveRecord::Migration[5.2]
  def change
    create_table :task_models do |t|
      t.string :job_class
      t.string :job_id
      t.string :interval
      t.string :params
    end
  end
end
