
interface Equipo {
    nombre: string,
    tipo: string, 
    estado: string
}

export class Inventario {

    private static instance: Inventario;
    private equipo : Equipo = {
        nombre: '',
        tipo: '',
        estado: ''
    }


    constructor() {
    }

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instance) {
            Inventario.instance = new Inventario();
        }
        return Inventario.instance;
    }

    public agregarEquipo( nombre: string, tipo: string, estado: string): void {
        this.equipo = {
            nombre: nombre,
            tipo: tipo,
            estado: estado
        }
    }

    public listarEquipos(): Equipo {
        return this.equipo;
    }
}