const fs = require("node:fs")

const readableStream = fs.createReadStream("./file.txt",{encoding: "utf-8"}) // to read data we use createReadStream() it is a method from fs module
   

const writableStream = fs.createWriteStream("./file2.txt")

// readableStream.on("data", (chunk)=>{
//     console.log(chunk);              // can replace this with pipes
//     writableStream.write(chunk)
// })

// Pipes - it takes a readable stream and connect it to writable stream

readableStream.pipe(writableStream)
