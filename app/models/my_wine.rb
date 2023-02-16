class MyWine < ApplicationRecord
  belongs_to :brand
  belongs_to :location
  belongs_to :user
end
