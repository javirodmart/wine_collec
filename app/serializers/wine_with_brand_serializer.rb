class WineWithBrandSerializer < ActiveModel::Serializer
  attributes :name, :vintage, :blend, :flavor_profile, :description,:img_url, :location_id, :brand_id
  has_many :brand
end
