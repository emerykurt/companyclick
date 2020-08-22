Rails.application.routes.draw do
  get 'ratings/new'
  get 'ratings/create'
  get 'ratings/index'
  get 'ratings/edit'
  get 'ratings/update'
  get 'ratings/show'
  get 'ratings/destroy'
  get 'ratings/top_review'
  get 'companies/index'
  get 'companies/show'
  get 'users/create'
  get 'users/edit'
  get 'users/new'
  get 'users/update'
  get 'users/destroy'
  get 'users/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
