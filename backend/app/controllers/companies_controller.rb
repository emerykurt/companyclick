class CompaniesController < ApplicationController
  def index
    companies = Company.all
    render json: CompanySerializer.new(companies)
  end

  def top_companies
    companies = Company.all
    top_companies = companies[0..4]
    render json: CompanySerializer.new(top_companies)
  end

  def show
    company = Company.find(params[:id])
    render json: CompanySerializer.new(company)
  end

  
end
