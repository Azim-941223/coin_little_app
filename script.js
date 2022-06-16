let url = 'https://api.nomics.com/v1/currencies/ticker?key=dcf9ac095aaf4d4a39e3778278ea2800a68a05cc&ids=BTC,ETH,XRP,LTC,DASH,SOL&interval=1d,30d&convert=USD&per-page=100&page=1'

let $coin = document.querySelector('.coin')
let $coin_change = document.querySelector('.coin_change')
let $coin_price = document.querySelector('.coin_price')
let $ethereum = document.querySelector('.ethereum')
let $ethereum_change = document.querySelector('.ethereum_change')
let $ethereum_price = document.querySelector('.ethereum_price')
let $litecoin = document.querySelector('.litecoin')
let $litecoin_change = document.querySelector('.litecoin_change')
let $litecoin_price = document.querySelector('.litecoin_price')
let $symbol_coin = document.querySelector('.symbol_coin')
let $symbol_ethereum = document.querySelector('.symbol_ethereum')
let $symbol_litecoin = document.querySelector('.symbol_litecoin')


fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
      $coin.textContent = `${data[0].name}`
      $coin_change.textContent = `${Math.floor(Number(data[0]['30d'].price_change)* 100) / 100}$`
      $coin_price.textContent = `${Math.floor(Number(data[0].price) * 100) / 100}$`
      $ethereum.textContent = `${data[1].name}`
      $ethereum_change.textContent = `${Math.floor(Number(data[1]['30d'].price_change)* 100) / 100}$`
      $ethereum_price.textContent = `${Math.floor(Number(data[1].price) * 100) / 100}$`
      $litecoin.textContent = `${data[4].name}`
      $litecoin_change.textContent = `${Math.floor(Number(data[4]['30d'].price_change)* 100) / 100}$`
      $litecoin_price.textContent = `${Math.floor(Number(data[4].price) * 100) / 100}$`
      $symbol_coin.textContent = `${data[0].symbol}`
      $symbol_ethereum.textContent = `${data[1].symbol}`
      $symbol_litecoin.textContent = `${data[4].symbol}`
  })
