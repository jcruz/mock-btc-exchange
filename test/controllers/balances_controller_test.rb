require 'test_helper'

class BalancesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @balance = balances(:one)
  end

  test "should show balance unauthorized" do
    get balances_url, as: :json
    assert_response :unauthorized
  end

  test "should update balance unauthorized" do
    patch balances_url, params: { balance: { btc: @balance.btc, usd: @balance.usd, user_id: @balance.user_id } }, as: :json
    assert_response :unauthorized
  end
end
