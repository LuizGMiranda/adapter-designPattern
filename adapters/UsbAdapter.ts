import {Conector} from './Conector'

export class UsbAdapter implements Conector {
    getId(){
        console.log('UsbAdapter + getId')
    }

    getSerialNumber(){
        console.log('UsbAdapter + getSerialNumber')
    }

    start(){
        console.log('UsbAdapter + start')
    }

    stop(){
        console.log('UsbAdapter + stop')
    }
}
