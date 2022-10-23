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

  if (selectFrom.value == 'R$ Real brasileiro') {
    fromCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency', 
      currency: 'BRL'
    }).format(inputValue)
  }


  if(selectFrom.value === 'US$ Dólar americano'){
    fromCurrencyValue.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency', 
      currency: 'USD'
    }).format(inputValue)
  }

  if(selectFrom.value === '€ Euro'){
    fromCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency', 
      currency: 'EUR'
    }).format(inputValue)
  }

  if(selectFrom.value === 'Bitcoin'){
    fromCurrencyValue.innerHTML = (inputValue)
  }

  //Alterar valor e moeda do 'Converter para'
  if (selectTo.value == 'R$ Real brasileiro') {
    toCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency', 
      currency: 'BRL'
    }).format(inputValue)
  }


  if(selectFrom.value === 'US$ Dólar americano' && selectTo.value === 'US$ Dólar americano'){
    toCurrencyValue.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency', 
      currency: 'USD'
    }).format(inputValue)
  } else if (selectTo.value === 'US$ Dólar americano') {
    toCurrencyValue.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency', 
      currency: 'USD'
    }).format(inputValue / dolar)
  }

  if(selectFrom.value === '€ Euro' && selectTo.value === '€ Euro'){
    toCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency', 
      currency: 'EUR'
    }).format(inputValue)
  } else if(selectTo.value === '€ Euro'){
    toCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency', 
      currency: 'EUR'
    }).format(inputValue / euro)
  }

  if(selectFrom.value === 'Bitcoin' && selectTo.value === 'Bitcoin'){
    toCurrencyValue.innerHTML = (inputValue)
  } else if(selectTo.value === 'Bitcoin'){
    toCurrencyValue.innerHTML = (inputValue / bitcoin)
  }
}

const changeCurrencyFrom = () => {
  const currencyCoin = document.getElementById('currency-coin-from')
  const currencyImg = document.getElementById('currency-img-from')

  if(selectFrom.value === 'R$ Real brasileiro'){
    currencyCoin.innerHTML = 'Real'
    currencyImg.src = "./assets/real.png"
  }

  if(selectFrom.value === 'US$ Dólar americano'){
    currencyCoin.innerHTML = 'Dólar americano'
    currencyImg.src = "./assets/dolar-americano.png"
  }

  if(selectFrom.value === '€ Euro'){
    currencyCoin.innerHTML = 'Euro'
    currencyImg.src = "./assets/euro.png"
  }

  if(selectFrom.value === 'Bitcoin'){
    currencyCoin.innerHTML = 'Bitcoin'
    currencyImg.src = "./assets/bitcoin.png"
  }

  convertValues()
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

  if(selectTo.value === 'Bitcoin'){
    currencyCoin.innerHTML = 'Bitcoin'
    currencyImg.src = "./assets/bitcoin.png"
  }

  convertValues()
}

button.addEventListener('click', convertValues)
selectFrom.addEventListener('change', changeCurrencyFrom)
selectTo.addEventListener('change', changeCurrencyTo)