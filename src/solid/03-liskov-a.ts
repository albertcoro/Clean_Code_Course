import { Tesla, Audi, Toyota, Honda, Volvo, Car } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: Car[] ) => {
        
        for (const car of cars) {
            console.log( car.constructor.name , car.getNumberOfSeats() ); 
        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2)
    ];


    printCarSeats( cars );

})();