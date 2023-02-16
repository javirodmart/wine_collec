class MyWinesController < ApplicationController
    def index
        render json: MyWine.all,except: [:created_at, :updated_at]
    end

    def show
        wines =  MyWine.find(params[:id])
        render json: wines , status: :ok
    end

    def create
        wines = MyWine.create!(wine_params)
        render json: wines , status: :created
    end

    def update
        wines = MyWine.find(params[:id])
        wines.update!(wine_params)
        render json: wines, status: :ok
    end

    def destroy
        wines = MyWine.find(params[:id])
        wines.destroy
        head :no_content
    end

    private

    def wine_params
        params.permit(:name, :vintage, :blend, :flavor_profile, :description,:img_url, :location_id, :brand_id,:user_id)
    end
end
