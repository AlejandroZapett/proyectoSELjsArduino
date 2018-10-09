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
	} else if(parseInt(data) < m ){
		//es una pequeña carga
	} else if(parseInt(data) < g ){
		//es una carga media
	} else {
		//es una gran carga
		colores.style.backgroundColor = "red";
		tipoCarga.innerHTML = "Gran carga";
	}
}