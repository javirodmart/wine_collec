class ApplicationController < ActionController::API
rescue_from ActiveRecord::RecordNotFound, with: :not_found
rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity

private

def not_found(invalid)
    render json: {errors: "#{invalid.model} not found"}, status: :not_found
end

def unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end
end
