const http = require('http');
const { exit } = require('process');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log("------- REQ -------")
    console.log(req.headers)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!\n');
});

server.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});
