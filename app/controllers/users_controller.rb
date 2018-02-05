class UsersController < ApplicationController
  # POST /users
  def create
    @user = User.new(email: params['email'], password: params['password'])

    if @user.save
      @user.create_balance(usd: 100000, btc: 0)
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:email, :password_digest)
    end
end
