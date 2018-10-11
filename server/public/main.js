const socket = io();

//limites
var p = 120;
var m = 300;	
var g = 500;
//letreros

socket.on('volts', function(data){

	//visualización de datos por consola
	//console.log(data);
	//console.log(typeof(data));

	//condicionales
	//filtro(data);
	filtro2(data);
	
});

function filtro(data){
	//selección de elementos de html
	let valor = document.getElementById('valor');
	let colores = document.getElementById('colores');
	let tipoCarga = document.getElementById('tipo-carga');

	//asignaciones
	valor.innerHTML = data+' ';

	if(parseInt(data) < p ){
		//es relajado
		colores.style.backgroundColor = "red";
		tipoCarga.innerHTML = "Gran carga";
		
	} else if(parseInt(data) < m ){
		//es una pequeña carga
		colores.style.backgroundColor = "#ff9966";
		tipoCarga.innerHTML = "Carga media";
		
		//programar un timeout para retrasar el cambio
	} else if(parseInt(data) < g ){
		//es una carga media
		colores.style.backgroundColor = "#8000ff";
		tipoCarga.innerHTML = "Pequeña carga";
		//programar un timeout para retrasar el cambio
	} else {
		//es una gran carga
		colores.style.backgroundColor = "#99ffcc";
		tipoCarga.innerHTML = "Relajado";
		//programar un timeout para retrasar el cambio
	}
}

function filtro2(data){
	//selección de elementos de html
	let valor = document.getElementById('valor');
	let colores = document.getElementById('colores');
	let tipoCarga = document.getElementById('tipo-carga');

	//asignaciones
	valor.innerHTML = data+' ';
	var p2 = 20;
	var g2 = 100;
	var m2 = 120;

	if(parseInt(data) < p2 ){
		//es relajado
		colores.style.backgroundColor = "red";
		tipoCarga.innerHTML = "Gran carga";
		
	} else if(parseInt(data) < m2 ){
		//es una pequeña carga
		colores.style.backgroundColor = "#ff9966";
		tipoCarga.innerHTML = "Carga media";
		
		//programar un timeout para retrasar el cambio
	} else if(parseInt(data) < g2 ){
		//es una carga media
		colores.style.backgroundColor = "#8000ff";
		tipoCarga.innerHTML = "Pequeña carga";
		//programar un timeout para retrasar el cambio
	} else {
		//es una gran carga
		colores.style.backgroundColor = "#99ffcc";
		tipoCarga.innerHTML = "Relajado";
		//programar un timeout para retrasar el cambio
	}
}