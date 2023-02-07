class Location < ApplicationRecord
    has_many :wines
    has_many :brands, through: :wines
end
