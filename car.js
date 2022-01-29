import promptSync from 'prompt-sync';
import { fileURLToPath } from "url";
const prompt = promptSync();

export default class Car{
    constructor(speed=0){
        this.speed = speed;
        this.odometer = 0;
        this.time = 0;
    }
    say_state(){
        console.log("I'm going "+this.speed+"kph!");
    }
    accelerate(){
        this.speed += 5;
    }
    brake(){
        //original code:
        //this.speed -= 5
        if(this.speed < 5){
            this.speed = 0;
        }else{
            this.speed -= 5;
        }
    }
    step(){
        this.odometer += this.speed;
        this.time += 1;
    }
    average_speed(){
        if(this.time != 0){
            return this.odometer / this.time;
        }
    }
}


if (process.argv[1] === fileURLToPath(import.meta.url)) {
    let this_car = new Car();
    console.log("I'm a car!");
    while(true){
        let  action = prompt("What should I do? [A]ccelerate, [B]rake, show [O]dometer, or show average [S]peed?").toUpperCase();

        switch(action){
            case 'A':
                this_car.accelerate();
                break;
            case 'B':
                this_car.brake();
                break;
            case 'O':
                console.log("The car has driven "+this_car.odometer+" kilometres");
                break;
            case 'S':
                console.log("The car's average speed was "+this_car.average_speed()+" kph.");
                break;
            default:
                console.log("I don't know how to do that");
                continue;
        }
        this_car.step();
        this_car.say_state();
    }
}

