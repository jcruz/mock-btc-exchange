# [Mock BTC Exchange](https://mock-btc-exchange.herokuapp.com/) [![travis][travis-image]][travis-url]

[travis-image]: https://travis-ci.org/jcruz/mock-btc-exchange.svg?branch=master
[travis-url]: https://travis-ci.org/jcruz/mock-btc-exchange

Mock trade bitcoin. Start out with $100,000 USD and play the real-time market prices. Your mock digital assets and money are secured on the exchange.

## Users
Non-traders and non-investors looking to get a taste of the cryptocurrency space without risking real money.

## Minimum viable product
- User register & sign in
- Show live market price
- Mock buy/sell bitcoin
- View digital asset portfolio

## Functionality

#### Register & Sign In
Users can register and sign in using email and password. Our application uses [JSON Web Tokens](https://jwt.io/introduction/), a stateless authentication mechanism.

#### Trading
With a starting balance of $100,000 USD, users can trade bitcoin at the current market value. Enter the amount you want to buy/sell.

#### Real-time Market Price
The exchange tracks the live price using [Gemini's API](https://docs.gemini.com/rest-api/). Prices updated in real time using [fetch](https://github.com/github/fetch) (JavaScript) -- no need to refresh the page!

#### Track Portfolio
User balances are saved in the database so your digital assets can be re-accessed with a simple sign in.

## Installation
rails 5 and postgresql required.
```
bundle install
rails db:create db:migrate
```

### Running the app
```
foreman start
```

## Issues
- ~~Implementing associations~~ resolved by reading the guide referenced below and adding the table reference in the scaffold generation command

#### Known bugs
- ~~Generated tests do not pass since I removed some controller endpoints~~ resolved by updating integration tests accordingly

## References
- Association basics [http://guides.rubyonrails.org/association_basics.html](http://guides.rubyonrails.org/association_basics.html)
- Net:HTTP library [http://ruby-doc.org/stdlib-2.5.0/libdoc/net/http/rdoc/Net/HTTP.html](http://ruby-doc.org/stdlib-2.5.0/libdoc/net/http/rdoc/Net/HTTP.html)

## Contributors
Jonathan Cruz

## Licence
MIT. Copyright (c) Jonathan Cruz.
