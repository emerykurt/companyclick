class User < ApplicationRecord
    has_many :ratings
    has_many :companies, through: :ratings
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :bootcamp_name, presence: :true 
    validates :city, presence: :true
    validates :state, presence: :true

    def self.create_from_omniauth(auth)
        User.find_or_create_by(uid: auth[:uid], provider: auth[:provider]) do |u|
            u.username = auth[:info][:first_name] + auth[:info][:last_name]
            u.first_name = auth[:info][:first_name]
            u.last_name = auth[:info][:last_name]
            u.email = auth[:info][:email]
            u.password = SecureRandom.hex(16)
        end
    end
end
