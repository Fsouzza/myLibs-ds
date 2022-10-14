fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response=> {
	return response.json()
})
.then(corpo=> {
	console.log(corpo)
})



var input = document.getElementById("input")
var output = document.getElementById("output")
var select = document.getElementById("select")

input.addEventListener("input", calcular)
select.addEventListener("change", calcular)

function Converter() {
	var inputValue = Number(input.value)
	var valorDolar = inputValue / 5.26
	var valorEuro = inputValue / 6.21
	var valorIene = inputValue / 0.048
	var valorBitCoin = inputValue / 244362.00
	switch(select.value){
		case "dolar":
			output.value = formatar(valorDolar,"USD")
			output.placeholder = "Dolar"
			break
		case "euro":
			output.value = formatar(valorEuro,"EUR")
			output.placeholder = "Euro"
			break
		case "iene":
			output.value = formatar(valorIene,"JPY")
			output.placeholder = "Iene"
			break
		case "bitcoin":
			output.value = "₿" + valorBitCoin.toFixed(10)
			output.placeholder = "Bitcoin"
	}
}

function formatar(numero,currency){
	numero = Number(numero)
	return numero.toLocaleString('en', { style: 'currency', currency: currency })
}