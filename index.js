// ¡NO MODIFIQUES ESTE ARCHIVO!

// Tus 7 tareas están en archivos separados.
// Abre task1.js para comenzar.

import * as tarea1 from "./task1.js";
import * as tarea2 from "./task2.js";
import * as tarea3 from "./task3.js";
import * as tarea4 from "./task4.js";
import * as tarea5 from "./task5.js";
import * as tarea6 from "./task6.js";
import * as tarea7 from "./task7.js";

let tarea;

if (process.argv[3]) {
  tarea = parseInt(process.argv[2]);
} else {
  console.log("Por favor, ejecuta tu archivo de tarea directamente en node.");
  console.log("Ejemplo: node task1.js");
};

switch (tarea) {
  case 1:
    globalThis.calculadoraCosto = tarea1.calculadoraCosto;
    console.log(calculadoraCosto(process.argv[3]));
    break;
  case 2:
    globalThis.NombresAmigos = tarea2.NombresAmigos;
    let nombresEntrada = new NombresAmigos(process.argv[3], process.argv[4], process.argv[5]);
    console.log(nombresEntrada);
    break;
  case 3:
    globalThis.calculadoraEdad = tarea3.calculadoraEdad;

    let a = process.argv[3];
    let m = process.argv[4];
    let d = process.argv[5];
    let respuestaEstudiante = calculadoraEdad(a, m, d);
    let hoy = new Date();
    let cumpleanos = new Date(a, m, d);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let elMes = hoy.getMonth() - cumpleanos.getMonth();

    if (elMes < 0x0 || 0x0 === elMes && hoy.getDate() < cumpleanos.getDate()) {
      edad--;
    }

    if (respuestaEstudiante === edad) {
      console.log("Exitoso");
    }

    break;
  case 4:
    globalThis.EdadAmigo = tarea4.EdadAmigo;

    let nombre = process.argv[3];
    let anio = process.argv[4];
    let mes = process.argv[5];
    let dia = process.argv[6];
    let amigo = new EdadAmigo(nombre, anio, mes, dia);// el profe crea un objeto y envia 4 datos 
    let salida = amigo.retornarEdad();// llama el metodo retornar edad
    let hoy4 = new Date();
    let cumpleanos4 = new Date(anio, mes, dia);
    let edad4 = hoy4.getFullYear() - cumpleanos4.getFullYear();
    let mes4 = hoy4.getMonth() - cumpleanos4.getMonth();

    if (mes4 < 0x0 || 0x0 === mes4 && hoy4.getDate() < cumpleanos4.getDate()) {
      edad4--;
    }

    let respuestaEsperada4 = "¡" + nombre + " tiene " + edad4 + " años hoy!";

    if (salida === respuestaEsperada4) {
      console.log('Exitoso');
    }

    break;
  case 5:
    globalThis.rubricaAprobadoReprobado = tarea5.rubricaAprobadoReprobado;
    console.log(rubricaAprobadoReprobado(process.argv[3]));
    break;
  case 6:
    globalThis.rubricaExcelente = tarea6.rubricaExcelente;
    console.log(rubricaExcelente(process.argv[3]));
    break;
  case 7:
    globalThis.rubricaPerfecto = tarea7.rubricaPerfecto;
    console.log(rubricaPerfecto(process.argv[3]));
}