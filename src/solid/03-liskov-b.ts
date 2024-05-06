export class Car {
    
    constructor( private numberOfSeats: number ) {}

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Tesla extends Car {
    
    constructor( numberOfSeats: number ) {
        super( numberOfSeats );
    }
}    
        

export class Audi extends Car {

    constructor( numberOfSeats: number ) {
        super( numberOfSeats );
    }
}

export class Toyota extends Car {

    constructor( numberOfSeats: number ) {
        super( numberOfSeats );
    }
}

export class Honda extends Car {

    constructor( numberOfSeats: number ) {
        super( numberOfSeats );
    }
}

export class Volvo extends Car {

    constructor( numberOfSeats: number ) {
        super( numberOfSeats );
    }
}
