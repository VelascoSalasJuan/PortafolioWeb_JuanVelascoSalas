# CHANGELOG — Web Personal

Registro de versiones y cambios del proyecto.

---

## v0.5.2 — 2026-10-26

Rediseño de tarjetas de proyectos (`ProjectCard`) en la sección Portfolio.

- Contenedores individuales de proyectos ajustados a formato cuadrado (`aspect-ratio: 1 / 1`)
- Añadido espacio superior para imagen rectangular con espaciado uniforme superior y lateral dentro del contenedor
- Título del proyecto configurado con caracteres `##########` (representando el proyecto de portafolio) y dos párrafos cortos descriptivos
- Botón *"Details"* sin funcionalidad ubicado en la esquina inferior derecha
- Componente parametrizado mediante props para facilitar su reutilización en futuros proyectos
- Actualizado registro en `CHANGELOG.md`

## v0.5.1 — 2026-10-26

Corrección de alineación vertical en la sección Portfolio al cambiar entre pestañas.

- Modificado `.portafolio-container` en `Portafolio.css` de `align-items: center` a `align-items: flex-start`
- Evita que el encabezado y la barra de navegación se desplacen verticalmente al cambiar entre contenidos de diferente altura (como Projects/Certifications vs Tech Stack)
- Actualizado registro en `CHANGELOG.md`

## v0.5.0 — 2026-10-26

Creación de la sección Portfolio en inglés con navegación dinámica y subcomponentes.

- Creada la estructura jerárquica de componentes para `Portafolio` en `frontend/src/pages/Portafolio/`:
  - Encabezado centrado (`PortfolioHeader`)
  - Barra de navegación centralizada (~50% de ancho) con pestañas dinámicas (`PortfolioNav`)
  - Contenido dinámico condicional (`PortfolioContent`) con vistas separadas:
    - `ProjectsView` y tarjetas vacías de proyectos (`ProjectCard`)
    - `CertificationsView` y tarjetas vacías de certificados (`CertificationCard`)
    - `TechStackView` con cuadrícula de 5 columnas para habilidades técnicas (`TechCard`)
- Gestión de estado activo en React sin recargar página
- Estilos responsive y transiciones suaves organizados en archivos `.css` individuales
- Actualizado registro en `CHANGELOG.md`

## v0.4.0 — 2026-10-26

Creación de la sección Contact en inglés con paneles lado a lado y subcomponentes estructurados.

- Creada la estructura jerárquica de componentes para `Contact` en `frontend/src/pages/Contact/`:
  - Panel izquierdo (`ContactFormPanel` y sus subcomponentes `ContactHeader`, `ContactForm`, `SocialLinks`)
  - Panel derecho (`CommentsPanel` and sus subcomponentes `CommentsHeader`, `CommentForm`, `CommentsList`)
- Implementado diseño responsive en dos columnas (~40% y ~60%) con Bootstrap y estilos personalizados en `.css` sin comentarios ni `style={{}}`
- Campos y selector desplegable interactivos con estado local en React
- Actualizado registro en `CHANGELOG.md`

## v0.3.2 — 2026-10-25

Actualización y refactorización de la sección About.

- Creada estructura de subcomponentes en `frontend/src/pages/About/ComponentesAbout/`:
  - `AboutHeader` (`AboutHeader.jsx` y `AboutHeader.css`)
  - `AboutHighlight` (`AboutHighlight.css` y `AboutHighlight.jsx`)
  - `AboutActions` (`AboutActions.css` y `AboutActions.jsx`)
  - `AboutStats` (`AboutStats.css` y `AboutStats.jsx`)
- Organizado el contenido según especificaciones: etiqueta superior "ABOUT", nombre principal en dos líneas ("JUAN ANDRE VELASCO SALAS"), párrafo descriptivo, caja destacada, botones independientes ("DOWNLOAD CV", "VIEW PROJECTS") y tres tarjetas horizontales ("PROJECTS", "CERTIFICATES", "COMPLETED WORKS")
- Actualizado registro en `CHANGELOG.md`

## v0.3.1 — 2026-10-25

Corrección de alineación para la barra de navegación fija en One-Page.

- Añadido `scroll-margin-top: 80px` en `index.css` para todas las secciones con ID
- Evita que el contenido quede oculto o desalineado debajo del `Navbar` fijo al hacer clic en los enlaces de navegación
- Actualizado registro en `CHANGELOG.md`

## v0.3.0 — 2026-10-25

Transición a estructura One-Page con desplazamiento vertical suave.

- Eliminado el enrutamiento de `react-router-dom` para unificar todas las secciones en una vista continua (`App.jsx`)
- Secciones apiladas verticalmente (`Home`, `About`, `Portafolio`, `Contact`) con altura de pantalla completa (`min-height: 100vh`)
- Creados archivos `.css` individuales para cada página (`About.css`, `Portafolio.css`, `Contact.css`)
- Actualizado `Navbar` con enlaces de anclaje (`#home`, `#about`, `#portafolio`, `#contact`) y barra superior fija
- Habilitado desplazamiento suave (`scroll-behavior: smooth`) en `index.css`
- Mantenido el fondo estático (`background-attachment: fixed`) mientras las secciones se deslizan en el scroll
- Actualizado registro en `CHANGELOG.md`

## v0.2.3 — 2026-10-25

Refactorización de la sección Home en componentes anidados y reutilizables.

- Creada estructura de subcomponentes en `frontend/src/pages/Home/ComponentesHome/`:
  - `HeroHeader` (`HeroHeader.jsx` y `HeroHeader.css`)
  - `SkillBadges` (`SkillBadges.jsx` y `SkillBadges.css`)
  - `HeroFooter` (`HeroFooter.jsx` y `HeroFooter.css`)
- Mantenido `Home.jsx` como contenedor y organizador principal
- Conservado el diseño, animaciones y contenido exactos sin crear componentes innecesarios para elementos simples
- Actualizado registro en `CHANGELOG.md`

## v0.2.2 — 2026-10-25

Efecto de transición vertical tipo diapositiva, fondo estático e implementación de la sección Home.

- Creado componente `PageTransition` en `frontend/src/components/PageTransition/` (`PageTransition.jsx` y `PageTransition.css`)
- Implementada animación CSS de desplazamiento vertical suave (`verticalSlide`) al cambiar de ruta
- Configurada imagen de fondo estática (`background-attachment: fixed`, `background-size: cover`) en `index.css` apuntando a `public/fondo.jpg`
- Actualizada página `Home` (`Home.jsx` y `Home.css`) con el contenido profesional en inglés
- Actualizado `App.jsx` para integrar la transición en las rutas
- Actualizado registro en `CHANGELOG.md`

## v0.2.1 — 2026-10-24

Navegación y rutas funcionales.

- Instalado y configurado `react-router-dom`
- Configurado `BrowserRouter` y rutas (`/`, `/about`, `/portafolio`, `/contact`) en `App.jsx`
- Navbar funcional con enlaces de navegación entre las 4 páginas
- Actualizado registro en `CHANGELOG.md`

## v0.2.0 — 2026-10-24

Estructura inicial de páginas y componente Navbar.

- Creadas 4 páginas en `frontend/src/pages/`: `Home`, `About`, `Portafolio`, `Contact` (sin diseño aun)
- Creado componente `Navbar` en `frontend/src/components/Navbar/` con `Navbar.jsx`, `Navbar.css` y la carpeta `ComponentesNavbar`
- Actualizada la regla de componentes: todo componente nuevo lleva su `.jsx`, su `.css` y una carpeta de subcomponentes llamada `Componentes<NombreComponente>`

## v0.1.0 — 2026-10-24

Inicio del proyecto Web Personal.

- Estructura organizada: `frontend/`, `backend/`, `Boveda_Obsidian/`
- Frontend: lienzo en blanco (React 19 + Vite 8 + Bootstrap 5)
- Backend: Express 5 con ruta base `/api/salud`
- Creado `CLAUDE.md` y `CHANGELOG.md`
