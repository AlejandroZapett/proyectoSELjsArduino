
const http = require('http');
const express = require('express');
const socketIO=require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO.listen(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000, function(){
	console.log('Server listening on port ',3000);
});

//SERIAL COMUNICATION
const Serialport = require('serialport');
const Readline = Serialport.parsers.Readline;

//indicamos el puerto y la velocidad de comunicacion
const port = new Serialport('/dev/cu.usbserial-A100LBFJ', {
	baudRate:9600
});

//recibimos y filtramos los datos
const parser = port.pipe(new Readline({ delimeter:'\r\n'}));

parser.on('open', function(){
	console.log('connection is opened');
});

//imprimiendo en consola los datos recibidos
parser.on('data', function(data){
	console.log(data);
	io.emit('volts', data);
});

//imprimimos el error cuando la conexión falla
port.on('error', function(err){
	console.log(err);
});