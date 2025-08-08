import React from "react";

interface LifeStats {
  weeksLived: number;
  weeksRemaining: number;
  totalWeeks: number;
  percentageCompleted: number;
}

interface WeeksGridProps {
  stats: LifeStats;
}

/**
 * Componente que renderiza una grilla visual de las semanas de vida
 * Cada fila representa un año (52 semanas)
 */
export function WeeksGrid({ stats }: WeeksGridProps) {
  const { weeksLived, totalWeeks } = stats;
  const totalYears = Math.ceil(totalWeeks / 52);
  const weeksPerYear = 52;

  // Generar el tablero continuo
  const renderWeeksGrid = () => {
    const weeks = [];
    const columnsPerRow = 104; // 104 semanas por fila (2 años)
    const totalRows = Math.ceil(totalWeeks / columnsPerRow);

    for (let week = 0; week < totalWeeks; week++) {
      const isLived = week < weeksLived;
      const isCurrentWeek = week === weeksLived;

      weeks.push(
        <div
          key={week}
          className={`week-cell ${isLived ? "lived" : "remaining"} ${
            isCurrentWeek ? "current" : ""
          }`}
          title={`Semana ${week + 1}${isCurrentWeek ? " (actual)" : ""}`}
        >
          {isCurrentWeek && (
            <div className="age-banner">
              <div className="age-banner-content">{currentAge}</div>
            </div>
          )}
        </div>
      );
    }

    // Dividir en filas de 104 columnas
    const rows = [];
    for (let row = 0; row < totalRows; row++) {
      const rowWeeks = weeks.slice(
        row * columnsPerRow,
        (row + 1) * columnsPerRow
      );
      rows.push(
        <div key={row} className="week-row">
          {rowWeeks}
        </div>
      );
    }

    return rows;
  };

  // Calcular edad aproximada
  const calculateAge = () => {
    const ageInWeeks = weeksLived;
    const ageInYears = Math.floor(ageInWeeks / 52);
    const remainingWeeks = ageInWeeks % 52;
    const ageInMonths = Math.floor(remainingWeeks / 4.33);

    if (ageInYears > 0) {
      return `~${ageInYears} años`;
    } else if (ageInMonths > 0) {
      return `~${ageInMonths} meses`;
    } else {
      return `~${ageInWeeks} semanas`;
    }
  };

  const currentAge = calculateAge();

  return (
    <div className="weeks-grid">
      <div className="grid-header">
        <h3>Tu vida en semanas</h3>
        <div className="grid-legend">
          <div className="legend-item">
            <div className="legend-color lived"></div>
            <span>Vividas</span>
          </div>
          <div className="legend-item">
            <div className="legend-color remaining"></div>
            <span>Restantes</span>
          </div>
          <div className="legend-item">
            <div className="legend-color current"></div>
            <span>Actual</span>
          </div>
        </div>
      </div>

      <div className="grid-container">{renderWeeksGrid()}</div>

      <div className="grid-footer">
        <p>
          Cada punto representa una semana.{" "}
          <strong>{weeksLived.toLocaleString()}</strong> semanas vividas de{" "}
          <strong>{totalWeeks.toLocaleString()}</strong> totales.
        </p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", opacity: 0.8 }}>
          Aprovecha cada semana al máximo. El tiempo es tu recurso más valioso.
        </p>
      </div>
    </div>
  );
}
