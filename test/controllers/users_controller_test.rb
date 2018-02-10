require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.new
    @user.email = 'test@example.com'
    @user.password = 'password'
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { email: @user.email, password: @user.password }, as: :json
    end

    assert_response 201
  end
end
