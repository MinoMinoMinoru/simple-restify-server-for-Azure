const restify = require('restify');
const fs = require('fs');

// Create HTTP server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log("Please open the following URLs in Browser")
    console.log("[URL A]");
    console.log("http://localhost:3978")

    console.log("[URL B]");
    console.log("http://localhost:3978/test-get")

    console.log("[URL C]");
    console.log("http://<Your Localhost Address>:3978/test-get");
});

// Listen for incoming requests.
server.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Welcome to the start test page");
    res.end();
});

server.get('/test-get', (req, res) => {
    fs.readFile("./index.html", 'UTF-8',
        function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
});

server.post('/test-post', (req, res) => {
    res.send({ TestBody: "Test Post Response Body" });
    res.end()
});