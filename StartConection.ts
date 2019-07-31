import {BluetoothAdapter} from './adapters/BluetoothAdapter'
import {RemoteAdapter} from './adapters/RemoteAdapter'
import {UsbAdapter} from './adapters/UsbAdapter'

export class StartConection {
    conexao: any;
    connecitonType: any;

    constructor(type: string){
        this.connecitonType = type;
    }

    connection() {
        switch (this.connecitonType) {
            case 'bluetooth': this.conexao = new BluetoothAdapter(); break;
            case 'remote': this.conexao = new RemoteAdapter(); break;
            case 'usb': this.conexao = new UsbAdapter(); break;
            default: break;
        }    
    }

    openConnection(){
        this.connection()
    }

    start() {
        this.conexao.start();
    }

    stop() {
        this.conexao.stop();
    }

    destroy() {
        console.log('destroy')
        delete this.conexao
    }
}

