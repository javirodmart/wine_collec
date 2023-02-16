class LocationsController < ApplicationController
    def index
        render json: Location.all
    end

    def show
        locations =  Location.find(params[:id])
        render json: locations,except: [:created_at, :updated_at], status: :ok
    end

    def create
        locations = Location.create!(location_params)
        render json: locations , status: :created
    end

    def update
        locations = Location.find(params[:id])
        locations.update!(location_params)
        render json: locations, status: :ok
    end

    def destroy
        locations = Location.find(params[:id])
        locations.destroy
        head :no_content
    end

    private

    def location_params
        params.permit(:country, :region, :description,:img_url)
    end
end
