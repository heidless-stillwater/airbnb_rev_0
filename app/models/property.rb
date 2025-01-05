class Property < ApplicationRecord
  validates :name, presence: true 
  validates :headline, presence: true 
  validates :description, presence: true 
  validates :address_1, presence: true 
  validates :city, presence: true 
  validates :state, presence: true 
  validates :country, presence: true 

  geocoded_by :address
#  after_validation :geocode, unless: -> (obj) {obj.latitude.present? and obj.longitude.present? }
  after_validation :geocode, if: -> { latitude.blank? && longitude.blank? }   # workaround for fake properties

  def address
    # [address_1, address_2, city, state, country].compact.join(', ')
    [state, country].compact.join(', ')  # workaround for fake properties
  end

end
