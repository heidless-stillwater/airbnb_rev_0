
require "rails_helper"

RSpec.describe "Api::UsersByEmails", type: :request do 
  describe "GET show" do
    let(:headers) {
      { accept: 'application/json' }
    }
    
    context "user exists" do 
      it "is successful" do 
        user = create(:user)
        get api_users_by_email_path, params: { email: user.email }, headers: headers
        expect(response).to be_successful
      end
    end

    context "user does not exist" do 
      it "is not found" do 
        get api_users_by_email_path, params: { email: "junk@junk.com" }, headers: headers
        expect(response).to have_http_status :not_found
      end
    end

  end
end

