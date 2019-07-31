"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BluetoothAdapter = /** @class */ (function () {
    function BluetoothAdapter() {
    }
    BluetoothAdapter.prototype.getId = function () {
        console.log('BluetoothAdapter + getId');
    };
    BluetoothAdapter.prototype.getSerialNumber = function () {
        console.log('BluetoothAdapter + getSerialNumber');
    };
    BluetoothAdapter.prototype.start = function () {
        console.log('BluetoothAdapter + start');
    };
    BluetoothAdapter.prototype.stop = function () {
        console.log('BluetoothAdapter + stop');
    };
    return BluetoothAdapter;
}());
exports.BluetoothAdapter = BluetoothAdapter;
//# sourceMappingURL=BluetoothAdapter.js.map