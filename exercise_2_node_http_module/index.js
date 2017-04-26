const http = require('http');

//The function that's passed in to createServer is called once
// for every HTTP request that's made against that server, so it's called the request handler.
const server = http.createServer((request, response) => {

    let method = request.method; // the http method that is used i.e "GET","POST" etc..
    let url = request.url; //the url from the client
    let headers = request.headers; // header information
    let userAgent = headers['userAgent']; // the user agent i.e firefox, chrome etc..
    let body = []; // the request body

    request.on('error', (er) => {
        //this prints the stack trace to stderr
        throw er;
        console.log(er.stack);
    })
        .on('data', (chunkOfData) => {
            body.push(chunkOfData);
        })
        .on('end', () => {
        body = Buffer.concat(body).toString();
        // at this point body has the entire request body stored in it as a string.

    });
    //this is setting the headers "implicitly"
    //This means you're counting on node to send the headers for you at the correct time before you start sending body data.
    // response.setHeader('Content-type', 'application/json');
    // response.setHeader('X-Powered-By', 'bacon');

    // this is writing the headers "explicity", to the response stream
    //Note: It's important to set the status and headers before you start writing chunks of data to the body.
    // This makes sense, since headers come before the body in HTTP responses.
    response.writeHead(200, {
        'Content type': 'application/json',
        'X-Powered-By': 'bacon'
    });

    /* The response body
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();*/

    //this is an easier way of writin the response body
    response.end('<html><body><h1>Hello, World!</h1></body></html>');


    // this is shorthand for the below code
}).listen(8080);

/* this is the same as the above code.
 const server = http.createServer();
 server.on('request', function(request, response) {
 // the same kind of magic happens here!
 });
 */


