var premioDisplay = document.getElementById('premio')
var descontoDisplay = document.getElementById('desconto')
var premiondDisplay = document.getElementById('premio_nd')
var coberturas = []
var coberturas_l = []
var sensores = []
var desconto_mapa = [[1,1,1,0,0,0,0],[1,1,1,0,1,0,1],[1,1,1,1,1,1,1]]

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

function build_coberturas(mapa) {
	for (let i = 0; i<mapa.length; i++){
		if (mapa[i] == 1){
			coberturas_l[i].style.fontWeight = 'bold'
		}
		else {
			coberturas_l[i].style.fontWeight = 'normal'
		}
	}
}

function calculo() {
	let v = []
	let d = 0;
	let p = 0;
	let pd = 0;
	for (let i = 0; i<sensores.length; i++){
		if (sensores[i].checked) {
			build_coberturas(desconto_mapa[i])
			d = sensores[i].value
		}
	}
	for (let i = 0; i<coberturas.length; i++){
		if (coberturas[i].checked) {
			if (coberturas_l[i].style.fontWeight == 'normal') {
				p += Number(coberturas[i].value)
			}
			else if (coberturas_l[i].style.fontWeight == 'bold') {
				pd += Number(coberturas[i].value)
			}
		}
	}
	v = [d,p,pd]
	return v
}

function set_options() {
	coberturas = get_options('sel_coberturas', 'INPUT');
	coberturas_l = get_options('sel_coberturas', 'LABEL');
	sensores = get_options('sel_sensores', 'INPUT')
}

function new_p() {
	set_options();
	let valores = calculo();
	let d_value = valores[0];
	let p_value = valores[1];
	let pd_value = valores[2];
	let p_crude = p_value+pd_value;
	let pd_m = ((pd_value*(100-d_value))/100);
	let p_m = (p_value+pd_m);
	let p_a = (p_m)*12;

	premioDisplay.textContent = "R$ " + p_a.toFixed(2);
	descontoDisplay.textContent = "Seu desconto é de R$ " + ((p_crude-p_m)*12).toFixed(2) + " ("+ d_value + "%)"
	premiondDisplay.textContent = "O valor original é de R$" + (p_crude*12)
}

document.body.addEventListener('change', new_p);

new_p();

/*v_ind.oninput = function(){
	let c = v_ind.value*10000
	let cd = String(c).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	document.getElementById('v_indenização_display').textContent = "Indenização de R$ " + cd + ".00"
}*/