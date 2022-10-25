const button = document.getElementById('convert-button')
const selectFrom = document.getElementById('currency-select-from')
const selectTo = document.getElementById('currency-select-to')

const dolar = 5.2
const euro = 5.0
const bitcoin = 99000

const convertValues = () => {
  const inputValue = document.getElementById('input-value').value
  const fromCurrencyValue = document.getElementById('first-currency-value')
  const toCurrencyValue = document.getElementById('second-currency-value')

  //Alterar valor e moeda do 'Converter de'
  fromCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency', 
    currency: 'BRL'
  }).format(inputValue)

  //Alterar valor e moeda do 'Converter para'
  if (selectTo.value == 'R$ Real brasileiro') {
    toCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency', 
      currency: 'BRL'
    }).format(inputValue)
  }

  if (selectTo.value === 'US$ Dólar americano') {
    toCurrencyValue.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency', 
      currency: 'USD'
    }).format(inputValue / dolar)
  }

  if(selectTo.value === '€ Euro'){
    toCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency', 
      currency: 'EUR'
    }).format(inputValue / euro)
  }

  if(selectTo.value === 'BTC Bitcoin'){
    toCurrencyValue.innerHTML = (inputValue / bitcoin)
  }
}

const changeCurrencyTo = () => {
  const currencyCoin = document.getElementById('currency-coin-to')
  const currencyImg = document.getElementById('currency-img-to')

  if(selectTo.value === 'US$ Dólar americano'){
    currencyCoin.innerHTML = 'Dólar americano'
    currencyImg.src = "./assets/dolar-americano.png"
  }

  if(selectTo.value === '€ Euro'){
    currencyCoin.innerHTML = 'Euro'
    currencyImg.src = "./assets/euro.png"
  }

  if(selectTo.value === 'BTC Bitcoin'){
    currencyCoin.innerHTML = 'Bitcoin'
    currencyImg.src = "./assets/bitcoin.png"
  }

  convertValues()
}

button.addEventListener('click', convertValues)
selectTo.addEventListener('change', changeCurrencyTo)