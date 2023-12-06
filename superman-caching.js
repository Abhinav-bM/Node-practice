// class superHero {
//     constructor (name){
//         this.name = name
//     }

//     getName (){
//         return this.name
//     }

//     setName (name){
//         this.name = name
//     }
// }

// module.exports = new superHero("batman");

class superHero {
    constructor (name){
        this.name = name
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name
    }   

}

// module.exports = new superHero("batman") // exporting instance

module.exports = superHero;         // exporting class