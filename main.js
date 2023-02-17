var premioDisplay = document.getElementById('premio')
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

var p_value = 10+calculo_p();

premioDisplay.textContent = "R$ " + String(p_value.toFixed(2));

//console.log(premioDisplay.textContent);