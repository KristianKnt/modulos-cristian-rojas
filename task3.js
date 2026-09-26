

export function calculadoraEdad(year,month,day) {
    // creamos una variable con la fecha de dia actual por eso llamamos a DATE
    const hoy = new Date();
    // usamos los datos que llegan como year, month y day
    // y creamos una variable fechaNacimiento y le damos los datos que llegaron
    // para que tenga el formato de anio, mes y dia
    const fechaNacimiento = new Date(year, month - 1, day);

    // creamos la varible edad que servira para guardar la edad del la persona 
    // restando los Años ejemplo edad = 2026 - 2000
    // edad guardaria 26 años    
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    // aca hallamos la diferencia entre los meses con eso sabemos
    // que aun no cunple años
    const diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();


    // en esta condicion validamos que la direntencia de los meses sea difente a 0 o igual a cero
    // si valida esa parte debe dar true
    // la otra parte valida si el dia hoy.getDate muestra una valor 1-31 dando refenncia al mes
    // igual fechaNacimiento.getDate() devuelve un numero del 1 -31 y con eso si es menor hoy.getDate significa
    // que aun no cumple años asi que a edad se le resta una unidad
    // mostrando que aun no cumple años
    if (diferenciaMeses < 0 || diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate()) {
        edad--;
    }

    return edad;
}








// export function calculadoraEdad(year, month, day) {
//   const today = new Date();
//   const birthDate = new Date(${year}-${month}-${day});

//   let age = today.getFullYear() - birthDate.getFullYear();
//   const monthDiff = today.getMonth() - birthDate.getMonth();
//   const dayDiff = today.getDate() < birthDate.getDate();

//   if (monthDiff < 0 || (monthDiff === 0 && dayDiff)) {
//     age--;
//   }
//   return age;
// }


