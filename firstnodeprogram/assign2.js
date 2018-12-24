/* var fs = require('fs');

try {  
    var data = fs.readFileSync('my-file.txt', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
} */


const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    var data = fs.readFileSync('my-file.txt', 'utf8');
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(data);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});