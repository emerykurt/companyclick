Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#omniauth'
  resources :sessions, only: [:login, :create]
  resources :ratings 
  get 'authorized', to: 'sessions#page_requires_login', as: 'require_login'
  get 'ratings/top_review', to: 'ratings#top_reviews', as: 'top_reviews'
  resources :companies, only: [:index, :show]
  resources :users, except: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
