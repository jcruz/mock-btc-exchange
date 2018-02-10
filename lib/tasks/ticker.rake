require 'net/http'
require 'json'

namespace :ticker do
  desc "Get latest gemini btc/usd ticker"
  task update: :environment do
    while true
      url = 'https://api.gemini.com/v1/pubticker/btcusd'
      uri = URI(url)
      begin
        response = Net::HTTP.get(uri)
      rescue StandardError => e
        puts e
        sleep 5
        next
      end
      json = JSON.parse(response)
      if Ticker.count > 0
        Ticker.first.update_column(:last, json['last'].to_f)
      else
        Ticker.create(symbol:'btcusd', last: json['last'].to_f)
      end
      sleep 5
    end
  end

end
