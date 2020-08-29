class RatingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :interview_process, :company_lifestyle, :compensation, :management_mentorship, :diversity, :first_name, :last_name, :bootcamp, :city, :state, :company_id
  belongs_to :company 
end