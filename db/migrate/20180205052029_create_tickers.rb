class CreateTickers < ActiveRecord::Migration[5.1]
  def change
    create_table :tickers do |t|
      t.string :symbol
      t.decimal :last

      t.timestamps
    end
  end
end
