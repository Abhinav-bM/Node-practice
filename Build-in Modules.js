// // Importing build-in modules

// // Path
// const path = require("node:path")  // OR const path = require("path")

// console.log(__filename);  // is a string that represents the full path to the file
// console.log(__dirname);   // is a string that represents the full path to the folder where "Build-in Modules.js" is located

// console.log(path.basename(__filename)); // out put will be last portion of __filename
// console.log(path.basename(__dirname));  // out put will be last portion of __dirname

// console.log(path.extname(__filename)); // output is .js 
// console.log(path.extname(__dirname));  // output null because it doesn't have the character in his path

// console.log(path.parse(__filename));// parse method which returns an object  who's propeties represents the significant elements of the path

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));

// console.log(path.join("folder1", "folder2","Build-in modules"));
// console.log(path.join("/folder1", "folder2","Build-in modules"));

// console.log(path.join(__dirname, "data.json"));



// console.log(path.join("folder1", "folder2","Build-in modules"));
// console.log(path.join("/folder1", "folder2","Build-in modules"));

// console.log(path.join(__dirname, "data.json"));



// console.log(path.resolve("folder1", "folder2","Build-in modules"));
// console.log(path.resolve("/folder1", "folder2","Build-in modules"));

// console.log(path.resolve(__dirname, "data.json"));



// console.log(path.resolve("folder1", "folder2","Build-in modules"));
// console.log(path.resolve("/folder1", "folder2","Build-in modules"));

// console.log(path.resolve(__dirname, "data.json"));




// // Events
// const EventEmitter = require("node:events")

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping)=>{
//     console.log(`order placed! baking a ${size} pizza with ${topping}`);
// })

// emitter.on("order-pizza", (size)=>{
//     if(size === "large"){
//         console.log("serving complimentry drink");
//     }
// })

// emitter.emit("order-pizza", "large", "mushroom")


// // imported own event module
// const Pizzashop = require("./event-module-creation")
// const DrinkMachine = require("./drink")

// const pizzashop = new Pizzashop();
// const drinkMachine = new DrinkMachine()

// pizzashop.on("order", (size, topping)=>{
//     console.log(`order recieved! baking a ${size} pizza with ${topping}`);
//     drinkMachine.serveDrink(size)
// })
// pizzashop.order("large","mushroom")
// pizzashop.displayOrderNumber()



// fs - module ( file system - module )
const fs = require("node:fs")

// method to read content of a file
const fileContents = fs.readFileSync("./file.txt", "utf-8" )//the sync represents is the method is a synchronous way of reading th file   // to read it in human readable format setting the second format, first one was file name
console.log(fileContents); // will get buffer with binary data

// read file method
fs.readFile("./file.txt", "utf-8", (error, data)=>{  //this is aynchronous method
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
})


// writeFile-have both syn and async versions - used to write contents in to a file
// writeFileSync
fs.writeFileSync("./greet.txt", "helooo") // syn version

fs.writeFile("./greet.txt", "Hello abhinav", (err)=>{ //async verion  // in this example ,this will override the previous content of the file
    if(err){
        console.log(err);                          
    }else{
        console.log("file written");
    }
})

