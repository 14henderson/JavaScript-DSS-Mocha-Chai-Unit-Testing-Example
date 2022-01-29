import Car from '../car.js';
import assert from 'assert';

var test_car = new Car();

describe('Testing initial values of car', function() {
    
    it("Testing initial speed", function(){
        assert.equal(test_car.speed, 0);
    });
    it("Testing initial odometer", function(){
        assert.equal(test_car.odometer, 0);
    });
    it("Testing initial time", function(){
        assert.equal(test_car.time, 0);
    });
});

describe("Testing acceleration functions of car", function(){
    it("Testing accelerate from 0", function(){
        test_car.accelerate();
        assert.equal(test_car.speed, 5);
    });
    it("Testing multiple accelerates", function(){
        test_car = new Car();
        for(let i=0; i<3; i++){
            test_car.accelerate(5);
        }
        assert.equal(test_car.speed, 15);
    });
});

describe("Testing brake functions of car", function(){
    it("Testing brake once", function(){
        test_car = new Car();
        test_car.accelerate();
        test_car.brake();
        assert.equal(test_car.speed, 0);
    });

    it("Testing multiple brakes", function(){
        test_car = new Car();
        for(let i=0; i<5; i++){
            test_car.accelerate();
        }
        for(let i=0; i<3; i++){
            test_car.brake();
        }
        assert.equal(test_car.speed, 10);
    });

    it("Test should not allow negative speed", function(){
        test_car = new Car();
        test_car.brake();
        assert.equal(test_car.speed, 0);
    });

    it("Test multiple brakes at zero", function(){
        test_car = new Car();
        for(let i=0; i<3; i++){
            test_car.brake();
        }
        assert.equal(test_car.speed, 0);
    });
});



//




/*
test('Testing initial values of car', () => {
    expect(test_car.speed).toBe(0);
});
*/
