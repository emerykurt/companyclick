class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :hq_city
      t.string :hq_state
      t.string :mission_statement
      t.string :website
      t.string :twitter

      t.timestamps
    end
  end
end
