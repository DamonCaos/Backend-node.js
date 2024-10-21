// cargar libreria http
const http = require('http');

// dfefinir un servidor
const server = http.createServer(function(request, response){
    response.writeHead(200, {'content-type': 'text/html'});

    response.end('Wake up, <b>Neo</b>...');
});

// arrancar el servidor
server.listen(1337, '127.0.0.1');

console.log('servidor arrancado en http://127.0.0.1:1337');
