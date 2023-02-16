class BrandSerializer < ActiveModel::Serializer
  attributes :id, :name , :description, :est, :img_url
end
