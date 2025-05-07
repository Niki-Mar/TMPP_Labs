class TemperatureSensor {
    constructor() {
        this.observers = [];
        this.temperature = 0;
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(x => x !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer.update(this.temperature));
    }

    setTemperature(temp) {
        console.log(`Temperature changed: ${temp}°C`);
        this.temperature = temp;
        this.notify();
    }
}

class TemperatureDisplay {
    update(temp) {
        console.log(`Display: Current temperature: ${temp}°C`)
    }
}

class FanController {
    update(temp) {
        if (temp > 25) {
            console.log('Fan is on (hot)');
        } else {
            console.log('Fan is off (normal)');
        }

    }
}

const sensor = new TemperatureSensor();
const display = new TemperatureDisplay();
const fan = new FanController();

sensor.subscribe(display);
sensor.subscribe(fan);

sensor.setTemperature(22);
sensor.setTemperature(28);
sensor.unsubscribe(display);
sensor.setTemperature(20);