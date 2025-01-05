# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# USERS
User.create!(
                email: "test@test.com",
                password: "password",
                password_confirmation: "password"
              )

9.times do |n|
  email = "example-#{n+1}@railstutorial.org"
  password = "password"
  User.create!(
                email: email,
                password: password,
                password_confirmation: password
              )
end

# PROPERTIES
10.times do 
  Property.create!(
    name: Faker::Lorem.word,
    headline: Faker::Lorem.sentence,
    # description: Faker::Lorem.paragraph,
    description: "<DESCRIPTION>",
    address_1: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    country: "United States"
  )
end
