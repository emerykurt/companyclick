class SessionsController < ApplicationController
  def login

  end

  def omniauth
    user = User.create_from_omniauth(auth)
    if user.valid?
        session[:user_id] = user.id
        redirect_to user_path(current_user)
    else
        flash[:message] = user.errors.full_messages.join(", ")
        redirect_to sessions_login_path
    end
  end

  def create
    @user = User.find_by_username(params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
        session[:user_id] = @user.id
        #redirect
    else
        #redirect
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to welcome_path
  end

  def page_requires_login
  end

  private
  def auth
      request.env['omniauth.auth']
  end
end
