

interface EquipoF {
    tipo : string;
    nombre : string;
    ram: string;
    procesador: string;
}

class Notebook implements EquipoF{
    public tipo : string;
    public nombre : string;
    public ram: string;
    public procesador: string;

    constructor( tipo : string, nombre : string, ram: string, procesador: string){
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }

    detalles(): string{
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador}`
    }
}


class Desktop implements EquipoF{
    public tipo : string;
    public nombre : string;
    public ram: string;
    public procesador: string;

    constructor( tipo : string, nombre : string, ram: string, procesador: string){
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }

    public detalles(): string{
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador} `
    }
}

class Servidor implements EquipoF{
    public tipo : string;
    public nombre : string;
    public ram: string;
    public procesador: string;

    constructor( tipo : string, nombre : string, ram: string, procesador: string){
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }

    public detalles(): string{
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, Ram: ${this.ram}, Procesador: ${this.procesador}`
    }
}

export class EquipoFactory {
    public crearEquipo( tipo : string, nombre: string, ram: string, procesador: string ){
        switch (tipo) {
            case 'Notebook':
                return new Notebook(tipo, nombre, ram, procesador)

            case 'Desktop':
                return new Desktop(tipo, nombre, ram, procesador);

            case 'Servidor':
                return new Servidor(tipo, nombre, ram, procesador);
        
            default:
                throw new Error('No se encontro el tipo')
        }
    }
}
