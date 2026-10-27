# CLAUDE.md — Web Personal

> Lee este archivo COMPLETO antes de escribir código. Es obligatorio.

## Sobre el proyecto

**Web Personal** — Página web / portafolio para el CV.
Muestra capturas y demos de otros proyectos.
Idioma de la UI: español.

## Estructura del proyecto

```
Web-Personal/
├── frontend/          ← React 19 + Vite 8 + Bootstrap 5
├── backend/           ← Node.js + Express 5
├── Boveda_Obsidian/   ← Bóveda de Obsidian (documentación)
├── CHANGELOG.md       ← Registro de versiones y cambios
└── REGLAS-PROYECTO.md ← Reglas detalladas (leer si hay duda)
```

## Reglas de código — Frontend

1. **Una carpeta por componente:** `Nombre/Nombre.jsx` + `Nombre.css` + `ComponentesNombre/` para hijos.
   Los subcomponentes repiten la misma estructura recursivamente.
2. **Sin barrel files.** Imports explícitos: `'./ComponentesNombre/Hijo/Hijo'`.
3. **Sin comentarios** en el código.
4. **Sin `style={{}}`.**  Todo va en archivos `.css` con una clase raíz propia.
5. **Variables CSS globales** para colores y branding van solo en `src/index.css`.
6. **Bootstrap para layout y espaciado**, CSS propio para color/tipografía/marca.
7. **Páginas** en `src/pages/` (una por ruta).
8. **Contexto global** en `src/context/`.
9. **Llamadas a API** en `src/services/`, nunca dentro de componentes.
10. **Estáticos** en `src/assets/` o `public/`.

## Reglas de ejecución

- Después de editar código, ejecuta `npm run lint`.
- `npm run build` debe pasar antes de dar la tarea por terminada si se tocaron rutas/componentes.
- No uses `&&` en comandos de shell de Windows; usa `;` o dos comandos separados.

## Forma de trabajar

- Explica en palabras sencillas lo que haces y por qué.
- Avanza por pasos pequeños y espera confirmación antes de seguir.
- Todo en español.
- Consulta `CHANGELOG.md` para ver el historial de versiones.
- Al terminar una tarea, registra el cambio en `CHANGELOG.md`.
