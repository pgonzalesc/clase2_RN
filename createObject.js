//Create Object
function Vehicle(name, maker){
    this.name = name;
    this.maker = maker;
}

let car1 = new Vehicle('fiesta', 'ford');
let car2 = new Vehicle('Santa fe', 'Hyundai');

console.log('Car1', car1.name);

let car = Object.create(Object.prototype,{
    name:{
        value:'fiesta',
        configurable: true,
        writable: true,
        enumerable: false,
    },
    maker: {
        value:'ford',
        configurable: true,
        writable: true,
        enumerable: false,
    },
});

console.log('Car1', car.maker);

class Vehicles{
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    start(){
        console.log('Starting...');
    }
}

let bike1 = new Vehicles('Hayabusa', 'Suzuki', '1340cc');
bike1.start();
bike1.brake = function () {
    console.log('Applying brake...');
}
console.log('bike', bike1.engine);
bike1.brake();
console.log('bike1 final', bike1);