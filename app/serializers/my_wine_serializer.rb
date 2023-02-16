class MyWineSerializer < ActiveModel::Serializer
  attributes :id, :name, :vintage, :blend, :flavor_profile, :description, :img_url
  has_one :brand
  has_one :location
  has_one :user_id
end
