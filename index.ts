import { StartConection } from "./StartConection";
const types = ['usb','remote','bluetooth'];

types.forEach(type => {
    console.log('TESTANDO: ' + type)
    let startConection = new StartConection(type);
    startConection.openConnection()
    startConection.start()
    startConection.stop()
    startConection.destroy()
});


