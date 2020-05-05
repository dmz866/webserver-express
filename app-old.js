const http = require('http');

http.createServer((request, response) => {
        //response.write('adsfghj');

        response.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = { nombre: 'Dosh' };

        response.write(JSON.stringify(salida));
        response.end();
    })
    .listen(8080);

console.log('Escuchando 8080');