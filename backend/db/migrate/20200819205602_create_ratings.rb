class CreateRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
      t.string :interview_process
      t.string :company_lifestyle
      t.integer :compensation
      t.string :management_mentorship
      t.string :diversity
      t.string :first_name
      t.string :last_name
      t.string :bootcamp
      t.string :city 
      t.string :state
      t.integer :company_id

      t.timestamps
    end
  end
end
