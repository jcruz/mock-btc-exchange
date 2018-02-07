# [Mock BTC Exchange](https://mock-btc-exchange.herokuapp.com/) [![travis][travis-image]][travis-url]

[travis-image]: https://travis-ci.org/jcruz/mock-btc-exchange.svg?branch=master
[travis-url]: https://travis-ci.org/jcruz/mock-btc-exchange

Mock trade bitcoin. Users start out with $100,000 USD and get to play the real-time market prices. Users' mock digital assets and money is secured on the exchange.

## Users
Non-traders and non-investors looking to play around in the cryptocurrency space without risking money.

## Minimum viable product
- User register & sign in
- Mock buy/sell bitcoin
- Track live market price

## Functionality
Users can register and sign in using email and password. Starting balance is $100,000 USD, which can be used to buy/sell bitcoin at the current market value. The exchange tracks the live price using [Gemini's API](https://docs.gemini.com/rest-api/). User balances are saved in the database so a user's digit assets can be re-accessed with a simple sign in.

## Installation
Requirements include rails 5 and postgresql.
```
bundle install
rails db:create db:migrate
```

### Running the app
```
foreman start
```

## Issues
- Implementing associations: resolved by reading the guide referenced below and adding the table reference in the scaffold generation command

### Known bugs
- Generated tests do not pass since I removed some controller endpoints

## References
- [http://guides.rubyonrails.org/association_basics.html](http://guides.rubyonrails.org/association_basics.html)
- [http://ruby-doc.org/stdlib-2.5.0/libdoc/net/http/rdoc/Net/HTTP.html](http://ruby-doc.org/stdlib-2.5.0/libdoc/net/http/rdoc/Net/HTTP.html)

## Contributors
Jonathan Cruz

## Licence
MIT. Copyright (c) Jonathan Cruz.
