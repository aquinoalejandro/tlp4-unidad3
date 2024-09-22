import { Inventario } from "./patrones/singleton/singleton";
import { EquipoFactory } from "./patrones/factoryMethod/factoryMethod";


//Ejercicio 1 
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos()); 
// Resultado esperado: 
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]


const factory = new EquipoFactory();
const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(Notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7