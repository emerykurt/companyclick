class RatingsController < ApplicationController

  def create
    rating = Rating.new(rating_params)
    if rating.save
      render json: RatingSerializer.new(rating)
    else
      render json: {error: 'Review could not be saved'}
    end
  end

  def index
    ratings = Rating.all
    options = {
      include: [:company]
    }
    render json: RatingSerializer.new(ratings, options)
  end

  def update
  end

  def show
  end

  def destroy
  end

  def top_review
  end

  private
  def rating_params
    params.require(:rating).permit(:interview_process, :company_lifestyle, :compensation, :management_mentorship, :diversity, :first_name, :last_name, :bootcamp, :city, :state, :company_id)
  end
end
