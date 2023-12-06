// module export patterns
// first
// const add = (a,b)=>{
//     return a+b;
// }

// module.exports = add;

// second
// module.exports = (a,b)=>{
//     return a+b;
// }

// Third
// const add = (a,b)=>{
//     return a + b;
// }

// const substract = (a,b)=>{
//     return a - b;
// }

// module.exports = {
//     // add : add,
//     // substract : substract

//     add,
//     substract
// }
// fourth
module.exports.add = (a,b)=>{
    return a + b;
}

module.exports.substract = (a,b)=>{
    return a - b;
}


