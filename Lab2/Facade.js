class SubsystemA {
    operationA() {
        return "A";
    }
}

class SubsystemB {
    operationB() {
        return "B";
    }
}

class SubsystemC {
    operationC() {
        return "C";
    }
}

class SystemFacade {
    constructor() {
        this.a = new SubsystemA();
        this.b = new SubsystemB();
        this.c = new SubsystemC();
    }

    simpleOperation() {
        return this.a.operationA() + this.b.operationB() + this.c.operationC();
    }
}

const facade = new SystemFacade();
console.log("Facade result:", facade.simpleOperation());
