class Light {
    turnOn() {
        console.log("The light is ON");
    }

    turnOff() {
        console.log("The light is OFF");
    }
}

// Abstract command interface
class Command {
    execute() { }
}

// Concrete command to turn on the light
class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

// Concrete command to turn off the light
class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOff();
    }
}

class RemoteControl {
    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }
}

const light = new Light();

const turnOn = new LightOnCommand(light);
const turnOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton();

remote.setCommand(turnOff);
remote.pressButton(); 
