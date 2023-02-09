Rails.application.routes.draw do
  resources :users, only: [:show, :create, :index]
  resources :creat_users
  resources :brands
  resources :locations
  resources :wines
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/authorized', to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Defines the root path route ("/")
  # root "articles#index"
end
