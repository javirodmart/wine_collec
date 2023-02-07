class CreateBrands < ActiveRecord::Migration[7.0]
  def change
    create_table :brands do |t|
      t.string :name
      t.integer :est
      t.text :description

      t.timestamps
    end
  end
end
