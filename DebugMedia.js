// console.log(__filename);
// console.log(__dirname);

// require("./")       // require is used to import a module



// path module
// const path = require("path")
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.parse(__filename));
// console.log(path.parse(__filename).ext);.
// console.log(path.join(__dirname, "api", "DebugMedia.js"));    // join will join one path to another




// fs module
// const fs = require("fs");    // fs - file system : used to create and change , files and folder
// console.log(fs);

// fs.mkdir(path.join(__dirname, "/api"),{},(err)=>{       //creating a folder
//     if(err) throw err;
// })

// fs.writeFile(path.join(__dirname,"/api.text"),"username : debug",(err)=>{
//     if(err) throw err;
// })
// const user = "rahul"
// fs.appendFile(path.join(__dirname,"/api","api.text"),`\nusername : ${user}`,(err)=>{
//     if(err) throw err;
// })

// to read the file
// fs.readFile(path.join(__dirname,"/api","api.text"),"utf-8",(err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })



// // Event method
// const EventEmitter = require("events")
// const emitter = new EventEmitter()

// emitter.on("message", (data)=>{
//     console.log(data.text);
// })

// emitter.on("logout", (data)=>{
//     console.log(data.text);
// })

// emitter.emit("message", { text : "user Logged"})

// emitter.emit("logout", { text : "user logged out"})