class WalkStrategy {
    move() {
        console.log("The robot walks.");
    }
}

class DriveStrategy {
    move() {
        console.log("The robot drives.");
    }
}

class FlyStrategy {
    move() {
        console.log("✈️ The robot flies.");
    }
}

class Robot {
    constructor(name, strategy) {
        this.name = name;
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    move() {
        console.log(`${this.name} is moving:`);
        this.strategy.move();
    }
}

// Strategies
const walking = new WalkStrategy();
const driving = new DriveStrategy();
const flying = new FlyStrategy();

// Context
const robot = new Robot("Bender", walking);

robot.move();               
robot.setStrategy(driving);
robot.move();               
robot.setStrategy(flying);
robot.move();               
