class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :bootcamp_name
      t.string :city
      t.string :state
      t.string :password_digest
      t.string :keywords
      t.string :uid
      t.string :provider

      t.timestamps
    end
  end
end
