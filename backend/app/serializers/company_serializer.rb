class CompanySerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :hq_city, :hq_state, :mission_statement, :website, :twitter
  has_many :ratings
end
