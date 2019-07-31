"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BluetoothAdapter_1 = require("./adapters/BluetoothAdapter");
var RemoteAdapter_1 = require("./adapters/RemoteAdapter");
var UsbAdapter_1 = require("./adapters/UsbAdapter");
var StartConection = /** @class */ (function () {
    function StartConection(type) {
        this.connecitonType = type;
    }
    StartConection.prototype.connection = function () {
        switch (this.connecitonType) {
            case 'bluetooth':
                this.conexao = new BluetoothAdapter_1.BluetoothAdapter();
                break;
            case 'remote':
                this.conexao = new RemoteAdapter_1.RemoteAdapter();
                break;
            case 'usb':
                this.conexao = new UsbAdapter_1.UsbAdapter();
                break;
            default: break;
        }
    };
    StartConection.prototype.start = function () {
        this.conexao.start();
    };
    return StartConection;
}());
exports.StartConection = StartConection;
//# sourceMappingURL=StartConection.js.map