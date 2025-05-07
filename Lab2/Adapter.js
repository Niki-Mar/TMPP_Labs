class OldPrinter {
    log(message) {
        console.log(`OldPrinter: ${message}`);
    }
}

class NewPrinter {
    print(message) {
        console.log(`NewPrinter: ${message}`);
    }
}

class PrinterAdapter {
    constructor(oldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    print(message) {
        this.oldPrinter.log(`Though the adapter: ${message}`);
    }
}

const oldPrinter = new OldPrinter();
const newPrinter = new NewPrinter();
const adapter = new PrinterAdapter(oldPrinter);
const message = "Hello!"

oldPrinter.log(message);
newPrinter.print(message);
adapter.print(message);