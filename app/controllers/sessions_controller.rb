class SessionsController < ApplicationController
    skip_before_action :authorized_user, only:[:create,:index]

    def index
        render json: Wine.all,except: [:created_at, :updated_at]
    end


    def create
        user = User.find_by(username:params[:username])
        if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
        else
            render json: {errors: "Incorrect Username or Password"}, status: :unauthorized
        end

        def destroy
            session.delete :user_id
            head :no_content
        end

    end
end
