class CreateRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
      t.string :process
      t.string :lifestyle
      t.integer :compensation
      t.string :mentorship
      t.string :diversity
      t.string :fname
      t.string :lname
      t.string :bootcamp
      t.string :city 
      t.string :state
      t.integer :company_id

      t.timestamps
    end
  end
end
