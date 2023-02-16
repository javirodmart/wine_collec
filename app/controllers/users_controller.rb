class UsersController < ApplicationController
    skip_before_action :authorized_user, only:[:create]
    def index
        render  json: User.all
    end
    def show
        render json: current_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    

    def show_wines
        wines = MyWine.where(user_id: params[:id])
        render json: wines
    end

   
    private 

    def user_params
        params.permit(:first_name, :last_name, :username, :email,:password)
    end
end
