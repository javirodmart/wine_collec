class BrandsController < ApplicationController
    def index
        render json: Brand.all, except: [:created_at, :updated_at]
    end

    def show
        brands =  Brand.find(params[:id])
        render json: brands,except: [:created_at, :updated_at], status: :ok
    end

    def create
        brands = Brand.create!(brand_params)
        render json: brands , status: :created
    end

    def update
        brands = Brand.find(params[:id])
        brands.update!(brand_params)
        render json: brands, status: :ok
    end

    def destroy
        brands = Brand.find(params[:id])
        brands.destroy
        head :no_content
    end

    private

    def brand_params
        params.permit(:name, :est, :description)
    end
end
