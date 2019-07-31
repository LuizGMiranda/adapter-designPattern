import { StartConection } from "./StartConection";

function start(){
    let startConection = new StartConection('usb');
    startConection.start()
}