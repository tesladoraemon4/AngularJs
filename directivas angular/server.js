var http = require("http");



http.createServer(function (req,res) {


	console.log('id del proceso: ', process.pid);
console.log('título del proceso: ', process.title);
console.log('versión de node: ', process.version);
console.log('sistema operativo: ', process.platform);


}).listen(8080);