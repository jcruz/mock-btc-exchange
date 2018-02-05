class BalancesController < ApplicationController
  before_action :authenticate_user
  before_action :set_balance, only: [:show, :update]

  # GET /balances
  def show
    render json: @balance
  end

  # PATCH/PUT /balances
  def update
    if @balance.update(balance_params)
      render json: @balance
    else
      render json: @balance.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_balance
      @balance = current_user.balance
    end

    # Only allow a trusted parameter "white list" through.
    def balance_params
      params.require(:balance).permit(:user_id, :usd, :btc)
    end
end
