"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsbAdapter = /** @class */ (function () {
    function UsbAdapter() {
    }
    UsbAdapter.prototype.getId = function () {
        console.log('UsbAdapter + getId');
    };
    UsbAdapter.prototype.getSerialNumber = function () {
        console.log('UsbAdapter + getSerialNumber');
    };
    UsbAdapter.prototype.start = function () {
        console.log('UsbAdapter + start');
    };
    UsbAdapter.prototype.stop = function () {
        console.log('UsbAdapter + stop');
    };
    return UsbAdapter;
}());
exports.UsbAdapter = UsbAdapter;
//# sourceMappingURL=UsbAdapter.js.map