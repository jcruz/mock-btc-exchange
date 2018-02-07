require 'test_helper'

class TickersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ticker = tickers(:one)
  end

  test "should show ticker unauthorized" do
    get tickers_url, as: :json
    assert_response :unauthorized
  end
end
