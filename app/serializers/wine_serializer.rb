class WineSerializer < ActiveModel::Serializer
  attributes :id,:name, :vintage, :blend, :flavor_profile, :description,:img_url, :location_id, :brand_id
  has_many :brand
end
