var premioDisplay = document.getElementById('premio')
var descontoDisplay = document.getElementById('desconto')
var premiondDisplay = document.getElementById('premio_nd')
var coberturas = [
	document.getElementById('cobertura1'),
	document.getElementById('cobertura2'),
	document.getElementById('cobertura3'),
	document.getElementById('cobertura4'),
	document.getElementById('cobertura5')
]

function calculo_p() {
	let p = 0;
	for (let i = 0; i<coberturas.length; i++) {
		if (coberturas[i].checked) {
			p += 5
		}
	}
	return p
}

var d_value = 2;
var p_value_crude = 10+calculo_p();
var p_value = p_value_crude-d_value;

premioDisplay.textContent = "R$ " + String(p_value.toFixed(2));
descontoDisplay.textContent = "Seu desconto é de R$ " + d_value;
premiondDisplay.textContent = "O valor original é de R$" + p_value_crude

//console.log(premioDisplay.textContent);