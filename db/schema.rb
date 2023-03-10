# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_16_211108) do
  create_table "brands", force: :cascade do |t|
    t.string "name"
    t.integer "est"
    t.text "description"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "country"
    t.string "region"
    t.string "description"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "my_wines", force: :cascade do |t|
    t.string "name"
    t.integer "vintage"
    t.text "blend"
    t.string "flavor_profile"
    t.text "description"
    t.string "img_url"
    t.integer "brand_id"
    t.integer "location_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_my_wines_on_brand_id"
    t.index ["location_id"], name: "index_my_wines_on_location_id"
    t.index ["user_id"], name: "index_my_wines_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.boolean "admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wines", force: :cascade do |t|
    t.string "name"
    t.integer "vintage"
    t.text "blend"
    t.string "flavor_profile"
    t.text "description"
    t.string "img_url"
    t.integer "brand_id", null: false
    t.integer "location_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_wines_on_brand_id"
    t.index ["location_id"], name: "index_wines_on_location_id"
  end

  add_foreign_key "wines", "brands"
  add_foreign_key "wines", "locations"
end
