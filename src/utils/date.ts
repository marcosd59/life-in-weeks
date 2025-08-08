/**
 * Utilidades para el manejo de fechas y cálculos de vida en semanas
 */

export interface LifeData {
  dateOfBirth: string;
  lifeExpectancy: number;
}

export interface LifeStats {
  weeksLived: number;
  weeksRemaining: number;
  totalWeeks: number;
  percentageCompleted: number;
}

/**
 * Calcula la diferencia en semanas entre dos fechas
 */
export function getWeeksBetween(startDate: Date, endDate: Date): number {
  const timeDiff = endDate.getTime() - startDate.getTime();
  const weeksDiff = timeDiff / (1000 * 60 * 60 * 24 * 7);
  return Math.floor(weeksDiff);
}

/**
 * Calcula las estadísticas de vida basadas en fecha de nacimiento y expectativa de vida
 */
export function calculateLifeStats(
  dateOfBirth: string,
  lifeExpectancy: number
): LifeStats {
  // Validar entrada
  if (!dateOfBirth || !lifeExpectancy || lifeExpectancy <= 0) {
    throw new Error("Datos de entrada inválidos");
  }

  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  // Validar que la fecha de nacimiento sea válida y no sea futura
  if (isNaN(birthDate.getTime()) || birthDate > today) {
    throw new Error("Fecha de nacimiento inválida");
  }

  const deathDate = new Date(birthDate);
  deathDate.setFullYear(birthDate.getFullYear() + lifeExpectancy);

  const weeksLived = getWeeksBetween(birthDate, today);
  const totalWeeks = getWeeksBetween(birthDate, deathDate);
  const weeksRemaining = Math.max(0, totalWeeks - weeksLived);
  const percentageCompleted =
    totalWeeks > 0 ? Math.min(100, (weeksLived / totalWeeks) * 100) : 0;

  return {
    weeksLived,
    weeksRemaining,
    totalWeeks,
    percentageCompleted,
  };
}

/**
 * Formatea un número de semanas en un formato legible
 */
export function formatWeeks(weeks: number): string {
  if (weeks < 1000) {
    return weeks.toLocaleString();
  }
  return (weeks / 1000).toFixed(1) + "k";
}

/**
 * Obtiene la fecha actual en formato YYYY-MM-DD
 */
export function getCurrentDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Valida si una fecha es válida
 */
export function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
}
