class CompaniesController < ApplicationController
  def index
    @companies = Companies.all
  end

  def show
    @company = Company.find(params[:id])
  end
end
