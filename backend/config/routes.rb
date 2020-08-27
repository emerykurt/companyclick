Rails.application.routes.draw do
  resources :ratings 
  get 'companies/top_companies', to: 'companies#top_companies', as: 'top_companies'
  get 'ratings/top_review', to: 'ratings#top_reviews', as: 'top_reviews'
  resources :companies, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
