var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Four things support the world:the learning of the wise, the justice of the great, the prayers of the good, and the valor of the brave');

}).listen(process.env.PORT || 8080);
