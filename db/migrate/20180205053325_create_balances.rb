class CreateBalances < ActiveRecord::Migration[5.1]
  def change
    create_table :balances do |t|
      t.references :user, foreign_key: true
      t.decimal :usd
      t.decimal :btc

      t.timestamps
    end
  end
end
