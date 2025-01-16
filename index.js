const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("content-Type", "text/plain");
//     res.end("hello world!\n")
// })

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    switch(req.url){
        case "/":
            res.write('<h1 style="color: red">Hello World!</h1>');
            res.write('<p>I wonder what else we can send...</p>');
            break; 
        case "/get":
            res.write('<h1 style="color: red">Hello again!</h1>');
            res.write('<p>I wonder what else we can send...</p>');
            break;
        case "/run":
            res.write('<h1 style="color: red">Run!!!!</h1>');
            res.write('<p>I wonder what else we can send...</p>');
            break;
        default:
            res.statusCode = 404; 
            break; 
    }
    
    // res.write('<h1 style="color: red">Hello World!</h1>');
    // res.write('<p>I wonder what else we can send...</p>');
    res.end();
  });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});