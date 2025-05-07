class Singleton {
    static instance;

    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }

        this.time = Date.now();

        Singleton.instance = this;
    }
}

const a = new Singleton();
const b = new Singleton();

console.log("Одинаковый объект:", a === b);
console.log("Значение time:", a.time);
console.log("Значение time снова:", b.time);
