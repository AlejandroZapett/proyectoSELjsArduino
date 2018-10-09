const socket = io();

socket.on('volts', function(data){
	console.log(data);
	let v = document.getElementById('v');
	v.innerHTML = data;
});