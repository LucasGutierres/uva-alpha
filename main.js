var premioDisplay = document.getElementById('premio')
var descontoDisplay = document.getElementById('desconto')
var premiondDisplay = document.getElementById('premio_nd')
var coberturas = []
var sensores = []

function get_options(id, name) {
	let selOptions = document.getElementById(id).children
	let c = []

	for (let i = 0; i<selOptions.length; i++){
		if (selOptions[i].tagName == name) {
			c.push(selOptions[i])
		}
	}
	return c;
}

function calculo_d() {
	let d = 0;
	for (let i = 0; i<sensores.length; i++){
		if (sensores[i].checked) {
			d += 2
		}
	}
	return d
}

function calculo_p() {
	let p = 0;
	for (let i = 0; i<coberturas.length; i++) {
		if (coberturas[i].checked) {
			p += 5
		}
	}
	return p
}

function set_options() {
	coberturas = get_options('sel_coberturas', 'INPUT');
	sensores = get_options('sel_sensores', 'INPUT')
}

var d_value = calculo_d();
var p_value_crude = 10+calculo_p();
var p_value = p_value_crude-d_value;

function new_p() {
	set_options();
	d_value = calculo_d();
	p_value_crude = 15+calculo_p();
	p_value = p_value_crude-d_value;

	premioDisplay.textContent = "R$ " + String(p_value.toFixed(2));
	descontoDisplay.textContent = "Seu desconto é de R$ " + d_value;
	premiondDisplay.textContent = "O valor original é de R$" + p_value_crude
}

document.body.addEventListener('change', new_p);

new_p();