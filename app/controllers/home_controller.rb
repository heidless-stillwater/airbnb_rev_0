
class HomeController < ApplicationController

  def index
    @all_users = User.all

    @properties = Property.all

  end
  
end
