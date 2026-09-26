import { rubricaAprobadoReprobado } from "./task5.js";

export function rubricaExcelente(notas) {
    return notas > 8 ? "Excelente" : rubricaAprobadoReprobado(notas);
}