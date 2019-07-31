import {Conector} from './Conector'

export class RemoteAdapter implements Conector {
    getId(){
        console.log('RemoteAdapter + getId')
    }

    getSerialNumber(){
        console.log('RemoteAdapter + getSerialNumber')
    }

    start(){
        console.log('RemoteAdapter + start')
    }

    stop(){
        console.log('RemoteAdapter + stop')
    }
}
