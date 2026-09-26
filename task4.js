import {calculadoraEdad} from './task3.js'


export class EdadAmigo {
    // creamos un contructor que recibe 4 argumentos: nombre,año,mes, dia
    constructor(nombre,year,mes,dia){
        this.nombre = nombre;
        this.year = year;
        this.mes = mes;
        this.dia = dia;
    }

    retornarEdad(){
        const edadActual = calculadoraEdad(this.year,this.mes,this.dia);
        // debe devolver una cadena que contenga el nombre y la edad del amigo
        return  `¡${this.nombre} tiene ${edadActual} años hoy!`;
    }
   
}