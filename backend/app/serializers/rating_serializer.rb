class RatingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :process, :lifestyle, :compensation, :mentorship, :diversity, :fname, :lname, :bootcamp, :city, :state, :company_id
  belongs_to :company 
end