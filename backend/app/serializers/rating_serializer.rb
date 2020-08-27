class RatingSerializer
  include FastJsonapi::ObjectSerializer
  attributes :interview, :interview_process, :hired, :company_lifestyle, :compensation, :management_mentorship, :diversity
  belongs_to :user
  belongs_to :companies 
end