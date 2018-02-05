class TickersController < ApplicationController
  before_action :authenticate_user
  before_action :set_ticker, only: [:show]

  # GET /tickers
  def show
    render json: @ticker
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ticker
      @ticker = Ticker.first
    end

    # Only allow a trusted parameter "white list" through.
    def ticker_params
      params.require(:ticker).permit(:symbol, :last, :timestamp)
    end
end
