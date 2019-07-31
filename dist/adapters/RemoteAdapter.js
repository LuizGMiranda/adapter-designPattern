"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RemoteAdapter = /** @class */ (function () {
    function RemoteAdapter() {
    }
    RemoteAdapter.prototype.getId = function () {
        console.log('RemoteAdapter + getId');
    };
    RemoteAdapter.prototype.getSerialNumber = function () {
        console.log('RemoteAdapter + getSerialNumber');
    };
    RemoteAdapter.prototype.start = function () {
        console.log('RemoteAdapter + start');
    };
    RemoteAdapter.prototype.stop = function () {
        console.log('RemoteAdapter + stop');
    };
    return RemoteAdapter;
}());
exports.RemoteAdapter = RemoteAdapter;
//# sourceMappingURL=RemoteAdapter.js.map