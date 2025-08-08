import { useState, useEffect } from "react";
import type { LifeData, LifeStats } from "../utils/date";
import { calculateLifeStats, getCurrentDate } from "../utils/date";

const STORAGE_KEY = "life-in-weeks-data";

/**
 * Hook personalizado para manejar los datos de vida y localStorage
 */
export function useLifeWeeks() {
  // Estado inicial con valores por defecto
  const [lifeData, setLifeData] = useState<LifeData>({
    dateOfBirth: getCurrentDate(),
    lifeExpectancy: 80,
  });

  const [stats, setStats] = useState<LifeStats>({
    weeksLived: 0,
    weeksRemaining: 0,
    totalWeeks: 0,
    percentageCompleted: 0,
  });

  // Cargar datos desde localStorage al inicializar
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setLifeData(parsedData);
      } catch (error) {
        console.error("Error al cargar datos desde localStorage:", error);
      }
    }
  }, []);

  // Calcular estadísticas cuando cambien los datos de vida
  useEffect(() => {
    try {
      const newStats = calculateLifeStats(
        lifeData.dateOfBirth,
        lifeData.lifeExpectancy
      );
      setStats(newStats);
    } catch (error) {
      console.error("Error calculando estadísticas:", error);
      // En caso de error, usar valores por defecto
      setStats({
        weeksLived: 0,
        weeksRemaining: 0,
        totalWeeks: 0,
        percentageCompleted: 0,
      });
    }
  }, [lifeData]);

  // Guardar datos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lifeData));
  }, [lifeData]);

  /**
   * Actualiza la fecha de nacimiento
   */
  const updateDateOfBirth = (dateOfBirth: string) => {
    setLifeData((prev) => ({ ...prev, dateOfBirth }));
  };

  /**
   * Actualiza la expectativa de vida
   */
  const updateLifeExpectancy = (lifeExpectancy: number) => {
    setLifeData((prev) => ({ ...prev, lifeExpectancy }));
  };

  /**
   * Resetea los datos a los valores por defecto
   */
  const resetData = () => {
    const defaultData = {
      dateOfBirth: getCurrentDate(),
      lifeExpectancy: 80,
    };
    setLifeData(defaultData);
  };

  return {
    lifeData,
    stats,
    updateDateOfBirth,
    updateLifeExpectancy,
    resetData,
  };
}
