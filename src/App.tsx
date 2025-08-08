import React from "react";
import { WeeksGrid } from "./components/WeeksGrid";
import "./App.css";

function App() {
  const [dateOfBirth, setDateOfBirth] = React.useState(() => {
    const saved = localStorage.getItem("life-in-weeks-data");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        return data.dateOfBirth || "1990-01-01";
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    }
    return "1990-01-01";
  });

  const [lifeExpectancy, setLifeExpectancy] = React.useState(() => {
    const saved = localStorage.getItem("life-in-weeks-data");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        return data.lifeExpectancy || 80;
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    }
    return 80;
  });

  // Guardar datos en localStorage cuando cambien
  React.useEffect(() => {
    localStorage.setItem(
      "life-in-weeks-data",
      JSON.stringify({
        dateOfBirth,
        lifeExpectancy,
      })
    );
  }, [dateOfBirth, lifeExpectancy]);

  // Cálculo simple para probar
  const birthDate = new Date(dateOfBirth);
  const today = new Date();

  // Validar que la fecha sea válida
  const isValidDate = !isNaN(birthDate.getTime()) && birthDate <= today;

  const weeksLived = isValidDate
    ? Math.floor(
        (today.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 7)
      )
    : 0;
  const totalWeeks = lifeExpectancy * 52;
  const weeksRemaining = Math.max(0, totalWeeks - weeksLived);
  const percentageCompleted =
    totalWeeks > 0 ? Math.min(100, (weeksLived / totalWeeks) * 100) : 0;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Life in Weeks</h1>
        <p>Visualiza tu vida en semanas</p>
      </header>

      <main className="app-main">
        {/* Panel lateral izquierdo */}
        <div className="left-panel">
          {/* Formulario de entrada */}
          <section className="input-section">
            <div className="form-group">
              <label htmlFor="dateOfBirth">Fecha de nacimiento:</label>
              <input
                type="date"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lifeExpectancy">
                Expectativa de vida (años):
              </label>
              <input
                type="number"
                id="lifeExpectancy"
                value={lifeExpectancy}
                onChange={(e) => setLifeExpectancy(Number(e.target.value))}
                min="1"
                max="150"
              />
            </div>

            <button
              className="reset-button"
              onClick={() => {
                setDateOfBirth("1990-01-01");
                setLifeExpectancy(80);
              }}
              title="Restablecer a valores por defecto"
            >
              Restablecer
            </button>
          </section>

          {/* Estadísticas */}
          <section className="stats-section">
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Semanas vividas</h3>
                <div className="stat-value">{weeksLived.toLocaleString()}</div>
              </div>

              <div className="stat-card">
                <h3>Semanas restantes</h3>
                <div className="stat-value">
                  {weeksRemaining.toLocaleString()}
                </div>
              </div>

              <div className="stat-card">
                <h3>Total de semanas</h3>
                <div className="stat-value">{totalWeeks.toLocaleString()}</div>
              </div>

              <div className="stat-card">
                <h3>Porcentaje completado</h3>
                <div className="stat-value">
                  {percentageCompleted.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* Barra de progreso */}
            <div className="progress-section">
              <div className="progress-label">
                <span>Progreso de vida</span>
                <span>{percentageCompleted.toFixed(1)}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${percentageCompleted}%` }}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Panel principal - Grilla de semanas */}
        <div className="main-panel">
          <WeeksGrid
            stats={{
              weeksLived,
              weeksRemaining,
              totalWeeks,
              percentageCompleted,
            }}
          />
        </div>
      </main>

      <footer className="app-footer">
        <p>
          Cada punto en la grilla representa una semana de tu vida. Aprovecha
          cada una al máximo.
        </p>
      </footer>
    </div>
  );
}

export default App;
