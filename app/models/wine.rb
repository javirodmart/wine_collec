class Wine < ApplicationRecord
    belongs_to :brand
    belongs_to :location

    validates :name, :vintage, :blend, :flavor_profile, :description, :location_id, :brand_id,  presence: true
end
