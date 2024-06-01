const http = require('http');
const PORT = 3000;

const requestHandler = (request, response) => {
  console.log(`Solicitud recibida para la URL: ${request.url}`);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var mensaje = 'Hola a todos desde INTEC\n'
  response.end('Hola a todos desde INTEC\n');
}

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    return console.error('Ocurrió un error al iniciar el servidor:', err);
  }

  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
