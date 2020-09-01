class RatingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :process, :lifestyle, :compensation, :mentorship, :diversity, :fname, :lname, :bootcamp, :city, :state, :company_id
  
  attribute :company do |object|
    CompanySerializer.new(object.company)
  end
end