import { Inventario } from "./patrones/singleton/singleton";
import { EquipoFactory } from "./patrones/factoryMethod/factoryMethod";
import { Equipo, Soporte } from "./patrones/observer/observer";
import { InventarioViejo, AdaptadorInventario } from "./patrones/adaptador/adaptador"; 


//Ejercicio 1 
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos()); 
// Resultado esperado: 
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]


const factory = new EquipoFactory();
const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(Notebook.detalles());
// Resultado esperado:
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7


const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
console.log(equipo)

soporte.agregarObservador(equipo);
soporte.cambiarEstado("en reparación");
// Resultado esperado:
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// Resultado esperado: 
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]