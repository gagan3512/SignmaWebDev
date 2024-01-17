//const http = require('node:http');

// we have written this because we have added type modules in package.json
// import http from "http"

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n'); 
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

import {a,b} from "./myModules.js"
console.log(a);
console.log(b);

import obj from "./myModules.js"
console.log(obj)