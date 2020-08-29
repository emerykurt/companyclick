class CompaniesController < ApplicationController
  def index
    companies = Company.all
    options = {
      includes: [:ratings]
    }
    render json: CompanySerializer.new(companies, options)
  end

  def top_companies
    companies = Company.all
    top_companies = companies[0..4]
    render json: CompanySerializer.new(top_companies)
  end

  def show
    company = Company.find(params[:id])
    options = {
      includes: [:ratings]
    }
    render json: CompanySerializer.new(company, options)
  end

  
end
