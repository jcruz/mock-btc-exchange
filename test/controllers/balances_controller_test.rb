require 'test_helper'

class BalancesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @balance = balances(:one)
  end

  test "should get index" do
    get balances_url, as: :json
    assert_response :success
  end

  test "should create balance" do
    assert_difference('Balance.count') do
      post balances_url, params: { balance: { btc: @balance.btc, usd: @balance.usd, user_id: @balance.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show balance" do
    get balance_url(@balance), as: :json
    assert_response :success
  end

  test "should update balance" do
    patch balance_url(@balance), params: { balance: { btc: @balance.btc, usd: @balance.usd, user_id: @balance.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy balance" do
    assert_difference('Balance.count', -1) do
      delete balance_url(@balance), as: :json
    end

    assert_response 204
  end
end
