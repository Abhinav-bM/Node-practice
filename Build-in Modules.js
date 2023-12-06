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




// Events
