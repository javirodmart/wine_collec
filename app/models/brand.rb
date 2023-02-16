class Brand < ApplicationRecord
    has_many :wines, dependent: :destroy
    has_many :locations, through: :wines
    validates :name, :est, :description, presence: true
    validates :est, numericality: { only_integer: true }
end
