class LocationSerializer < ActiveModel::Serializer
  attributes :id , :country, :region, :description, :img_url
end
