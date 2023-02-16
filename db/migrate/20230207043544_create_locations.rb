class CreateLocations < ActiveRecord::Migration[7.0]
  def change
    create_table :locations do |t|
      t.string :country
      t.string :region
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
