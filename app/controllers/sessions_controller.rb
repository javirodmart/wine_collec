class SessionsController < ApplicationController
    def create
        user = User.find_by(name:params[:name])
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
