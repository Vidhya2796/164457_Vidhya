/* Write a node.JS program that execute a connection to server and return success message like "Success, i'm listening from port: 3000"
Hint: You need npm module – http
Reference: https://www.guru99.com/node-js-create-server-get-data.html */

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Success, im listening from port: 3000\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});