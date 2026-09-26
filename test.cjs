// ============================================
// test.js - Pruebas del Laboratorio de Módulos
// ============================================

const { spawnSync } = require('child_process');
const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Verificar que index.js exista antes de ejecutar las pruebas
const indexPath = path.join(__dirname, 'index.js');
if (!fs.existsSync(indexPath)) {
    console.error('Error: No se encontró index.js en el directorio actual.');
    process.exit(1);
}

// Función auxiliar para preparar y verificar la salida
function prepararYVerificar(entradaArray, salidaArray) {
    const salidaEsperada = salidaArray.join('\n');

    const resultado = spawnSync('node', ['index.js', ...entradaArray], {
        encoding: 'utf8',
        cwd: __dirname
    });

    if (resultado.error) {
        throw new Error(`Error al ejecutar index.js: ${resultado.error.message}`);
    }

    if (resultado.status !== 0) {
        throw new Error(`index.js terminó con código ${resultado.status}. Stderr: ${resultado.stderr}`);
    }

    let salidaReal = (resultado.stdout || '').trim();
    salidaReal = salidaReal.replace(/\r\n/g, '\n');

    assert.ok(
        salidaReal.includes(salidaEsperada),
        `Se esperaba encontrar la salida esperada en la salida real.\n\nEsperado:\n${salidaEsperada}\n\nReal:\n${salidaReal}`
    );
}

// ============================================
// PRUEBA 1: 124 → 128.24
// ============================================
function probarTareaUno() {
    const entradaArray = ['1', '124'];
    const salidaArray = ['128.24'];
    prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 2: Nombres de amigos
// ============================================
function probarTareaDos() {
    const entradaArray = ['2', 'Karim', 'Uli', 'Georgina'];
    const salidaArray = ["NombresAmigos { nombre1: 'Karim', nombre2: 'Uli', nombre3: 'Georgina' }"];
    prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 3: Fecha exitosa
// ============================================
function probarTareaTres() {
    const entradaArray = ['3', '2001', '12', '25'];
    const salidaArray = ['Exitoso'];
    prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 4: Fecha exitosa con nombre
// ============================================
function probarTareaCuatro() {
    const entradaArray = ['4', 'Kimi', '1998', '11', '5'];
    const salidaArray = ['Exitoso'];
    prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 5: Aprobado (nota 6)
// ============================================
function probarTareaCincoAprobado() {
    const entradaArray = ['5', '6'];
    const salidaArray = ['Aprobado'];
    prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 6: Reprobado (nota 4)
// ============================================
function probarTareaCincoReprobado() {
    const entradaArray = ['5', '4'];
    const salidaArray = ['Reprobado'];
    prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 7: Excelente (nota 9)
// ============================================
function probarTareaSeisExcelente() {
    const entradaArray = ['6', '9'];
    const salidaArray = ['Excelente'];
    prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 8: Aprobado (nota 8)
// ============================================
function probarTareaSeisAprobado() {
    const entradaArray = ['6', '8'];
    const salidaArray = ['Aprobado'];
    prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 9: Perfecto (nota 11)
// ============================================
function probarTareaSietePerfecto() {
    const entradaArray = ['7', '11'];
    const salidaArray = ['Perfecto'];
    prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// PRUEBA 10: Aprobado (nota 5)
// ============================================
function probarTareaSieteAprobado() {
    const entradaArray = ['7', '5'];
    const salidaArray = ['Aprobado'];
    prepararYVerificar(entradaArray, salidaArray);
}

// ============================================
// EJECUTAR TODAS LAS PRUEBAS
// ============================================

function ejecutarPruebas() {
    const pruebas = [
        { nombre: 'Tarea 1: 124 → 128.24', func: probarTareaUno },
        { nombre: 'Tarea 2: Nombres de amigos', func: probarTareaDos },
        { nombre: 'Tarea 3: Fecha exitosa', func: probarTareaTres },
        { nombre: 'Tarea 4: Fecha exitosa con nombre', func: probarTareaCuatro },
        { nombre: 'Tarea 5: Aprobado (nota 6)', func: probarTareaCincoAprobado },
        { nombre: 'Tarea 5: Reprobado (nota 4)', func: probarTareaCincoReprobado },
        { nombre: 'Tarea 6: Excelente (nota 9)', func: probarTareaSeisExcelente },
        { nombre: 'Tarea 6: Aprobado (nota 8)', func: probarTareaSeisAprobado },
        { nombre: 'Tarea 7: Perfecto (nota 11)', func: probarTareaSietePerfecto },
        { nombre: 'Tarea 7: Aprobado (nota 5)', func: probarTareaSieteAprobado }
    ];

    let aprobadas = 0;
    const total = pruebas.length;

    console.log('Ejecutando pruebas del Laboratorio de Módulos...');
    console.log('='.repeat(50));

    for (const prueba of pruebas) {
        try {
            prueba.func();
            console.log(`[OK] ${prueba.nombre}`);
            aprobadas++;
        } catch (error) {
            console.log(`[FALLO] ${prueba.nombre}`);
            console.log(`  ${error.message}`);
        }
    }

    console.log('='.repeat(50));
    console.log(`Puntaje: ${aprobadas}/${total}`);

    if (aprobadas === total) {
        console.log('¡Todas las pruebas pasaron!');
    } else {
        console.log('Algunas pruebas fallaron. Revisa tus tareas.');
        process.exit(1);
    }
}

// Ejecutar todas las pruebas
ejecutarPruebas();