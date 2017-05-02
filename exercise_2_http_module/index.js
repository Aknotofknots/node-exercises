// this example is taken from //https://www.quora.com/What-is-an-echo-server-in-Node-js
const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("asefsefs");
}).listen(8080);
console.log('Server running at http://127.0.0.1:6789/');

// //The function that's passed in to createServer is called once
// // for every HTTP request that's made against that server, so it's called the request handler.
//  const http = require('http');

// http.createServer((request, response) => {
//
//     let method = request.method; // the http method that is used i.e "GET","POST" etc..
//     let url = request.url; //the request url
//     let headers = request.headers; // header information
//     let userAgent = headers['userAgent']; // the user agent i.e firefox, chrome etc..
//     let body = []; // the request body
//
//     request.on('error', (er) => {
//         //this prints the stack trace to stderr
//         throw er;
//         console.log(er.stack);
//     })
//         .on('data', (chunkOfData) => {
//             console.log(chunkOfData);
//             body.push(chunkOfData);
//         })
//         .on('end', () => {
//         body = Buffer.concat(body).toString();
//         // at this point body has the entire request body stored in it as a string.
//
//     });
//     //this is setting the headers "implicitly"
//     //This means you're counting on node to send the headers for you at the correct time before you start sending body data.
//     response.setHeader('Content-type', 'application/json');
//     response.setHeader('X-Powered-By', 'bacon');
//
//     // this is writing the headers "explicity", to the response stream
//     //Note: It's important to set the status and headers before you start writing chunks of data to the body.
//     // This makes sense, since headers come before the body in HTTP responses.
//     // response.writeHead(200, {
//     //     'Content type': 'text/plain',
//     //     'X-Powered-By': 'bacon'
//     // });
//
//      //The response body
//     response.write('<html>');
//     response.write('<body>');
//     response.write('<h1>Hello, World!</h1>');
//     response.write('</body>');
//     response.write('</html>');
//     response.end();
//
//     //this is an easier way of writing the response body
//     // response.end('<html><body><h1>Hello, World!</h1></body></html>');
//     response.on('error', (err) => {
//         console.log(err);
//     });
//
//     // response.statusCode = 200;
//     // response.setHeader('Content-type', 'application/json');
//
//     let responseBody = {
//         headers: headers,
//         method: method,
//         url: url,
//         body: body
//
//     };
//
//     // response.write(JSON.stringify(responseBody));
//     response.end();
//
//     // Note: the 2 lines above could be replaced with this next one:
//     // response.end(JSON.stringify(responseBody))
//
//
//
// }).listen(8080);


/***this is a simplified version of the above code that just takes the
 *  data from the request stream and write it to the response stream. It's called an echo server***/

// const http = require('http');
//
// http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/echo') {
//
//         let body = [];
//
//         req.on('data', (chunkOfData) => {
//             body.push(chunkOfData);
//         })
//             .on('end', () => {
//                 body = Buffer.concat(body).toString();
//                 res.end(body);
//             })
//
//     } else {
//         res.statusCode = 404;
//         res.end();
//     }
// }).listen(8080);

// const http = require('http');
// const readAndPrint = require('../exercise_3_and_4_filesystem_module/index');
//
// http.createServer(function (request, response) {
//     request.on('error', function (err) {
//         console.error(err);
//         response.statusCode = 400;
//         response.end();
//     });
//     response.on('error', function (err) {
//         console.error(err);
//     });
//     if (request.method === 'GET' && request.url === '/echo') {
//         response.write("hthth");
//         request.pipe(response);
//
//     } else {
//         response.statusCode = 404;
//         console.log(response.statusCode);
//         response.end();
//     }
// }).listen(8080);
