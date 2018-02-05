class TickersController < ApplicationController
  before_action :authenticate_user
  before_action :set_ticker, only: [:show, :update, :destroy]

  # GET /tickers
  def index
    @tickers = Ticker.all

    render json: @tickers
  end

  # GET /tickers/1
  def show
    render json: @ticker
  end

  # POST /tickers
  def create
    @ticker = Ticker.new(ticker_params)

    if @ticker.save
      render json: @ticker, status: :created, location: @ticker
    else
      render json: @ticker.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tickers/1
  def update
    if @ticker.update(ticker_params)
      render json: @ticker
    else
      render json: @ticker.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tickers/1
  def destroy
    @ticker.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ticker
      @ticker = Ticker.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def ticker_params
      params.require(:ticker).permit(:symbol, :last)
    end
end
