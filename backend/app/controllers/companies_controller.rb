class CompaniesController < ApplicationController
  def index
    companies = Company.all
      render json: companies.to_json(only:[:id, :name, :hq_city, :hq_state, :mission_statement, :website, :twitter]) #http://localhost:3000/companies.json
  end

  def show
    company = Company.find(params[:id])
    render json: company
  end
end
