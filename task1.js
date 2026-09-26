export function calculadoraCosto(entradaSinImpuestos) { // 124
    let salidaConImpuestos = Number(entradaSinImpuestos);// convertirmos el valor entrante en un numeros por que llega string
    const tarifaTransaccion = 3 //  3 dolares extra de cobro por traferencia
    const interes =entradaSinImpuestos* 0.01// 1% de interes de cobro
    

    return salidaConImpuestos + tarifaTransaccion + interes;

}