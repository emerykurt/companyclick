class RatingsController < ApplicationController
  def new
  end

  def create
  end

  def index
    ratings = Rating.all
    render json: RatingSerializer.new(ratings)
  end

  def edit
  end

  def update
  end

  def show
  end

  def destroy
  end

  def top_review
  end
end
