import { StartConection } from "./StartConection";

let startConection = new StartConection('remote');
startConection.openConnection()
startConection.start()
startConection.stop()
startConection.destroy()