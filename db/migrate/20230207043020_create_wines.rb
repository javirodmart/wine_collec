class CreateWines < ActiveRecord::Migration[7.0]
  def change
    create_table :wines do |t|
      t.string :name
      t.integer :vintage
      t.text :blend
      t.string :flavor_profile
      t.text :description 
      t.string :img_url
      t.belongs_to :brand, null: false, foreign_key: true
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
