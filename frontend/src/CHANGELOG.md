v0.2.1 — 2026-10-24

- Añadido navegación con React Router:
  - Importado `react-router-dom`
  - Componente `App` ahora renderiza `BrowserRouter` + `Navbar` + las rutas para Home, About, Portafolio y Contact
  - Componente `Navbar` actualizado para incluir enlaces `Link` a cada ruta
  - Asegurado `collapse navbar-collapse show` en el `Navbar` para visibilidad inicial de los enlaces

v0.2.0 — 2026-10-24

- Estructura inicial de páginas y componente Navbar

- Creadas 4 páginas en `frontend/src/pages/`: `Home`, `About`, `Portafolio`, `Contact` (sin diseño aun)
- Creado componente `Navbar` en `frontend/src/components/Navbar/` con `Navbar.jsx`, `Navbar.css` y la carpeta `ComponentesNavbar`
- Actualizada la regla de componentes: todo componente nuevo lleva su `.jsx`, su `.css` y una carpeta de subcomponentes llamada `Componentes<NombreComponente>`

v0.1.0 — 2026-10-24

Inicio del proyecto Web Personal.

- Estructura organizada: `frontend/`, `backend/`, `Boveda_Obsidian/`
- Frontend: lienzo en blanco (React 19 + Vite 8 + Bootstrap 5)
- Backend: Express 5 con ruta base `/api/salud`
- Creado `CLAUDE.md` y `CHANGELOG.md`