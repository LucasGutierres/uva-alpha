var premioDisplay = document.getElementById('premio')
var descontoDisplay = document.getElementById('desconto')
var premiondDisplay = document.getElementById('premio_nd')
var coberturas = []
var sensores = []

var v_ind = document.getElementById('v_indenização')

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
			d += 5
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

function new_p() {
	set_options();
	let d_value = calculo_d();
	let p_value_crude = 15+calculo_p();
	let p_value = p_value_crude*(100-d_value)/100;

	premioDisplay.textContent = "R$ " + String(p_value.toFixed(2));
	descontoDisplay.textContent = "Seu desconto é de " + d_value + "%"
	premiondDisplay.textContent = "O valor original é de R$" + p_value_crude
}

document.body.addEventListener('change', new_p);

v_ind.oninput = function(){
	let c = Number(v_ind.value)*10000
	let cd = String(c).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	document.getElementById('v_indenização_display').textContent = "Indenização de R$ " + cd + ".00"
}

new_p();