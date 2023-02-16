Rails.application.routes.draw do
  resources :my_wines
  resources :users, only: [:show, :create, :index,:show_wines]
  resources :creat_users
  resources :brands
  resources :locations
  resources :wines
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/authorized_user', to: 'users#show'
  get '/loginWines' , to: 'sessions#index'
  get 'dashboard/users/:id/wines', to: 'users#show_wines'


  post "/login", to: "sessions#create"
  # post 'dashboard/:id/wine', to: 'my_wine#create'

  delete "/logout", to: "sessions#destroy"
  delete "/wine-info/wines/:id", to: "wines#destroy"
  delete "/brand-info/brands/:id", to: "brands#destroy"
  delete "/location-info/locations/:id", to: "locations#destroy"
  # Defines the root path route ("/")
  # root "articles#index"
end
