interface Observador{ 
    actualizar(estado: string):void
}


export class Equipo implements Observador{
    constructor(
        private nombre: string,
        private tipo: string,
        private estado: string
    ){}

    actualizar(estado: string): void { 
        console.log(`Soporte notificado: ${this.nombre} ha cambiado su estado a ${estado}`)
    } 


}


export class Soporte {
    private observadores: Observador[] = [];
    private estado: string = ' ';

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.estado));
    }
}