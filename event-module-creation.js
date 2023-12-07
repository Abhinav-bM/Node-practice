const EventEmitter = require("node:events")

class pizzashop extends EventEmitter {
    
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size, topping){
        this.orderNumber++;
        this.emit("order", size, topping)
    }

    displayOrderNumber (){
        console.log(`current Order Number is ${this.orderNumber}`);
    }
}

module.exports = pizzashop;  // exporting