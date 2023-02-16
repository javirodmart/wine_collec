class WinesController < ApplicationController
    
    def index
        render json: Wine.all,except: [:created_at, :updated_at]
    end

    def show
        wines =  Wine.find(params[:id])
        render json:wines, serializer: WineWithBrandSerializer 
    end

    def create
        wines = Wine.create!(wine_params)
        render json: wines , status: :created
    end

    def update
        wines = Wine.find(params[:id])
        wines.update!(wine_params)
        render json: wines, status: :ok
    end

    def destroy
        wines = Wine.find(params[:id])
        wines.destroy
        head :no_content
    end

    private

    def wine_params
        params.permit(:name, :vintage, :blend, :flavor_profile, :description,:img_url, :location_id, :brand_id)
    end
end

