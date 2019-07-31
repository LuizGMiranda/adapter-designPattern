"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StartConection_1 = require("./StartConection");
function start() {
    var startConection = new StartConection_1.StartConection('usb');
    console.log('ola')
    startConection.start();
}
//# sourceMappingURL=index.js.map