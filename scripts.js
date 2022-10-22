const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.0
const bitcoin = 99000

const convertValues = () => {
  const inputReais = document.getElementById('input-real').value
  const realValueText = document.getElementById('first-currency-value')
  const convertValueText = document.getElementById('second-currency-value')

  realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency', 
    currency: 'BRL'
  }).format(inputReais)

  if(select.value === 'US$ Dólar americano'){
    convertValueText.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency', 
      currency: 'USD'
    }).format(inputReais / dolar)
  }

  if(select.value === '€ Euro'){
    convertValueText.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency', 
      currency: 'EUR'
    }).format(inputReais / euro)
  }

  if(select.value === 'Bitcoin'){
    convertValueText.innerHTML = (inputReais / bitcoin)
  }
}

const changeCurrency = () => {
  const currencyCoin = document.getElementById('currency-coin')
  const currencyImg = document.getElementById('currency-img')

  if(select.value === 'US$ Dólar americano'){
    currencyCoin.innerHTML = 'Dólar americano'
    currencyImg.src = "./assets/dolar-americano.png"
  }

  if(select.value === '€ Euro'){
    currencyCoin.innerHTML = 'Euro'
    currencyImg.src = "./assets/euro.png"
  }

  if(select.value === 'Bitcoin'){
    currencyCoin.innerHTML = 'Bitcoin'
    currencyImg.src = "./assets/bitcoin.png"
  }

  convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)