const http = require("http");
const port = 9000;

const portHandler = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`
        <h1 style="color: blue; text-align: center;">
            Welcome To Our Server
        </h1>
    `);
    res.end();
};

const Server = http.createServer(portHandler);

Server.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port " + port);
});
