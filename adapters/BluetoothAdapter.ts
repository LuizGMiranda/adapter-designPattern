import {Conector} from './Conector'

export class BluetoothAdapter implements Conector {
    getId(){
        console.log('BluetoothAdapter + getId')
    }

    getSerialNumber(){
        console.log('BluetoothAdapter + getSerialNumber')
    }

    start(){
        console.log('BluetoothAdapter + start')
    }

    stop(){
        console.log('BluetoothAdapter + stop')
    }
}