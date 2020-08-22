class UsersController < ApplicationController
  def create
    @user = User.create(user_params)
    if @user.save
        session[:user_id] = @user.id
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
  end

  def destroy
    user = User.find(params[:id]) 
    user.destroy
  end

  def show
  end
end
