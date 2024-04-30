class Product {
    constructor(
        public name: String,
    ){}

    toString() {
        return '${this.name}';
    }
}

(()=>{
    const bluePants = new Product('blue');
    console.log(bluePants.toString);
    
})();