class CreateRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
      t.boolean :interview
      t.string :interview_process
      t.boolean :hired
      t.string :comapny_lifestyle
      t.integer :compensation
      t.string :management_mentorship
      t.string :diversity
      t.integer :user_id
      t.integer :company_id

      t.timestamps
    end
  end
end
