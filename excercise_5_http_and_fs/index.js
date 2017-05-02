const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.method === "GET"&& req.url === "/about"){
        fs.readFile('lorem.txt','utf8', (err, data) => {
            if(err){
                throw err;
            }
            let result = data.split(' ');
            let randomIndex = Math.random()* result.length +1;
            console.log(result);
            res.end();
        })
    }

}).listen(5656);