class MyWines < ActiveRecord::Migration[7.0]
  def change
    create_table :my_wines do |t|
      t.string :name
      t.integer :vintage
      t.text :blend
      t.string :flavor_profile
      t.text :description 
      t.string :img_url
      t.belongs_to :brand
      t.belongs_to :location
      t.belongs_to :user
      t.timestamps
end
end
end
