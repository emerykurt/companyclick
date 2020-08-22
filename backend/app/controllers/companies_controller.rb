class CompaniesController < ApplicationController
  def index
    @companies = Company.all
    respond_to do |format|
      format.json {render json: @companies} #http://localhost:3000/companies.json
    end
  end

  def show
    @company = Company.find(params[:id])
  end
end
