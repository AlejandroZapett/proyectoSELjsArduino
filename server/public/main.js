const socket = io();

//limites
var p = 5;
var m = 10;
var g = 20;
//letreros

socket.on('volts', function(data){

	//visualización de datos por consola
	//console.log(data);
	//console.log(typeof(data));

	//condicionales
	filtro(data);
	
});

function filtro(data){
	//selección de elementos de html
	let valor = document.getElementById('valor');
	let colores = document.getElementById('colores');
	let tipoCarga = document.getElementById('tipo-carga');

	//asignaciones
	valor.innerHTML = data+' V';

	if(parseInt(data) < p ){
		//es relajado
		colores.style.backgroundColor = "#99ffcc";
		tipoCarga.innerHTML = "Relajado";
	} else if(parseInt(data) < m ){
		//es una pequeña carga
		colores.style.backgroundColor = "#8000ff";
		tipoCarga.innerHTML = "Pequeña carga";
		//programar un timeout para retrasar el cambio
	} else if(parseInt(data) < g ){
		//es una carga media
		colores.style.backgroundColor = "red";
		tipoCarga.innerHTML = "#ff9966";
		//programar un timeout para retrasar el cambio
	} else {
		//es una gran carga
		colores.style.backgroundColor = "red";
		tipoCarga.innerHTML = "Gran carga";
		//programar un timeout para retrasar el cambio
	}
}