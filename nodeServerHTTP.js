const http = require("node:http")            // import http module

const server = http.createServer((req, res)=>{             // invoking createserver method it accept callback fucntion as its argument
    res.writeHead(200, {"Content-Type": "text/plain"})                      // 200 is the http status code for successfulm response
    res.end("Hello world")        
})   

server.listen(3000, ()=>{
    console.log("Server running on port 3000");
})