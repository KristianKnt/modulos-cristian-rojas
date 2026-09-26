import {rubricaExcelente} from "./task6.js";

export function rubricaPerfecto(notas) {
    return notas == 11 ? "Perfecto": rubricaExcelente(notas);
}