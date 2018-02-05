Rails.application.routes.draw do
  scope 'v1' do
    resource :balances, only: [:show, :update]
    resource :tickers, only: [:show]
    resources :users, except: [:index, :update, :destroy]
    post 'user_token' => 'user_token#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
