class UsersController < ApplicationController
    

    def show
        user = User.find(session[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    def login
        user = User.find_by(name:params[:id])
        if user&.authenticate(params[:password])
            render json user, status: :ok
        else 
            rebder json: {errors: "Incorrect Username or Password"}, status: :unauthorized
        end
    end

    private 

    def user_params
        params.permit(:name,:email,:password)
    end
end
