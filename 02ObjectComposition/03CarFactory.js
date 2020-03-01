function solve(order) {

    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ]

    let engine = engines.find(x => x.power >= order.power);

    let car = {};

    if (engine) {

        car.model = order.model;
        car.engine = engine;
        car.carriage = {
            type: order.carriage,
            color: order.color
        };

        if (order.wheelsize % 2 == 0) {

            car.wheels = new Array(4).fill(order.wheelsize - 1);

        } else {

            car.wheels = new Array(4).fill(order.wheelsize);
        }
    }
    return car;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));