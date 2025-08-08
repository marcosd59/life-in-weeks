# [Life in Weeks](https://life-in-weeks-app.netlify.app/)

Una aplicación web moderna y responsive que visualiza tu vida en semanas, mostrando cuántas has vivido y cuántas te quedan según tu fecha de nacimiento y expectativa de vida. Construida con React, TypeScript y diseñada con una interfaz elegante que te ayuda a reflexionar sobre el tiempo.

**¡Prueba la aplicación ahora mismo!** 👉 [https://life-in-weeks-app.netlify.app/](https://life-in-weeks-app.netlify.app/)

_No necesitas instalar nada localmente. Simplemente haz clic en el enlace y comienza a visualizar tu vida en semanas._

---

## Descripción

Life in Weeks es una aplicación interactiva que permite a los usuarios visualizar su vida de manera única y reflexiva. La aplicación presenta una grilla donde cada celda representa una semana de tu vida, permitiéndote ver de un vistazo cuántas semanas has vivido y cuántas te quedan por vivir.

## Capturas principales

### Página principal

![Vista Home](src/assets/Home-01.png)
![Vista Home - Variante 2](src/assets/Home-02.png)

---

### Formulario de datos

![Formulario](src/assets/Form-01.png)
![Formulario - Con datos](src/assets/Form-02.png)

---

### Grilla de semanas

![Grilla de semanas](src/assets/Grid-01.png)
![Grilla de semanas - Detalle](src/assets/Grid-02.png)

---

### Diseño adaptativo

![Vista móvil](src/assets/Phone-01.png)
![Vista móvil - Variante 2](src/assets/Phone-02.png)
![Vista móvil - Variante 3](src/assets/Phone-03.png)
![Vista móvil - Variante 4](src/assets/Phone-04.png)

---

## Características visuales

- Grilla interactiva de semanas con colores diferenciados
- Barra de progreso visual del porcentaje de vida completado
- Estadísticas en tiempo real con cálculos automáticos
- Diseño responsive optimizado para móviles y escritorio
- Tema oscuro moderno con gradientes atractivos

## Funcionalidades

- **Visualización de semanas**: Grilla interactiva que muestra cada semana de tu vida
- **Cálculos automáticos**: Semanas vividas, restantes y porcentaje completado
- **Barra de progreso**: Visualización del progreso de vida
- **Persistencia de datos**: Los datos se guardan automáticamente en localStorage
- **Diseño responsive**: Funciona perfectamente en dispositivos móviles y desktop
- **Tema oscuro**: Interfaz moderna con tema oscuro

## Tecnologías utilizadas

- **React 19** - Biblioteca de interfaz de usuario [https://reactjs.org/](https://reactjs.org/)
- **TypeScript** - Tipado estático para JavaScript [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- **Vite** - Herramienta de construcción rápida [https://vitejs.dev/](https://vitejs.dev/)
- **CSS** - Estilos personalizados sin dependencias externas

## Herramientas utilizadas

- **ESLint** - Linter para código JavaScript/TypeScript
- **VS Code** - Editor de código
- **Git** - Control de versiones
- **npm** - Gestor de paquetes

---

## Instrucciones para iniciar el proyecto

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/marcosd59/life-in-weeks.git
   cd life-in-weeks
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abre tu navegador**

   ```
   http://localhost:5173
   ```

### Estructura del proyecto

```
life-in-weeks/
├── public/           # Archivos estáticos
├── src/
│   ├── components/   # Componentes reutilizables
│   │   └── WeeksGrid.tsx      # Componente de la grilla de semanas
│   ├── hooks/        # Hooks personalizados
│   │   └── useLifeWeeks.ts    # Hook para la lógica de vida
│   ├── utils/        # Utilidades
│   │   └── date.ts           # Utilidades para cálculos de fechas
│   ├── assets/       # Imágenes y recursos
│   ├── App.tsx       # Componente principal
│   ├── main.tsx      # Punto de entrada
│   ├── App.css       # Estilos de la aplicación
│   └── index.css     # Estilos globales
└── README.md         # Documentación principal
```

### Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

### Solución de problemas comunes

1. **Error de puerto ocupado**

   - Vite buscará automáticamente un puerto disponible
   - O puedes especificar uno diferente: `npm run dev -- --port 3000`

2. **Errores de dependencias**

   - Elimina node_modules: `rm -rf node_modules`
   - Reinstala: `npm install`

3. **Problemas de cache**
   - Limpia la cache de Vite: `npm run dev -- --force`

---

## Uso

1. **Ingresa tu fecha de nacimiento** en el campo correspondiente
2. **Ajusta tu expectativa de vida** (por defecto 80 años)
3. **Observa los resultados** en tiempo real:
   - Estadísticas actualizadas
   - Barra de progreso
   - Grilla visual de semanas
4. **Los datos se guardan automáticamente** para futuras visitas

## Características de la UI

### Tema Oscuro

- Colores suaves y modernos
- Gradientes atractivos
- Efectos hover y transiciones suaves

### Responsive Design

- Adaptable a diferentes tamaños de pantalla
- Grilla de semanas que se ajusta automáticamente
- Navegación optimizada para móviles

### Interactividad

- Hover effects en las celdas de semanas
- Tooltips informativos
- Animaciones suaves

## Funcionalidades detalladas

### Cálculos Automáticos

- **Semanas vividas**: Calculadas desde la fecha de nacimiento hasta hoy
- **Semanas restantes**: Basadas en la expectativa de vida
- **Porcentaje completado**: Proporción de vida vivida
- **Total de semanas**: Expectativa de vida en semanas

### Persistencia de Datos

- Los datos se guardan automáticamente en localStorage
- Se cargan al recargar la página
- Botón para restablecer a valores por defecto

### Visualización

- **Grilla de semanas**: 52 columnas por año (semanas)
- **Colores diferenciados**: Verde para vividas, gris para restantes, amarillo para la actual
- **Barra de progreso**: Muestra el porcentaje completado
- **Estadísticas**: Tarjetas con información clave

## Futuras mejoras

- [ ] Exportar imagen de la grilla
- [ ] Múltiples perfiles de vida
- [ ] Metas y objetivos por semana
- [ ] Comparación con estadísticas globales
- [ ] Modo claro/oscuro
- [ ] Animaciones más elaboradas
- [ ] Exportar datos en diferentes formatos

## Autor

**Marcos Pool Canul**

---

_Desarrollado con ❤️ usando React y TypeScript_

**¡Aprovecha cada semana al máximo!** ⏰
