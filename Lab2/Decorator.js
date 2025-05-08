class SimplePrinter {
    print(message) {
        console.log(message);
    }
}

class TimestampDecorator {
    constructor(printer) {
        this.printer = printer;
    }

    print(message) {
        const timestamp = new Date().toISOString();
        this.printer.print(`[${timestamp}] ${message}`)
    }
}

const printer = new SimplePrinter();
const decoratedPrinter = new TimestampDecorator(printer);
const message = "Hello!";

printer.print(message)
decoratedPrinter.print(message)
