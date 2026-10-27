# Jerarquía de componentes

> Convención de estructura de carpetas para React en este proyecto.
> Todo componente vive en **su propia carpeta**, junto a **su CSS** y su carpeta de subcomponentes `Componentes<NombreComponente>`.

## Regla

Cada componente es una carpeta con exactamente esta forma:

```
NombreComponente/
├── NombreComponente.jsx      # el componente (export nombrado)
├── NombreComponente.css      # los estilos del componente
└── ComponentesNombreComponente/  # carpeta para sus subcomponentes
    └── Subcomponente/
        ├── Subcomponente.jsx
        ├── Subcomponente.css
        └── ComponentesSubcomponente/
```

## Ejemplo real

```
src/components/Navbar/
├── Navbar.jsx
├── Navbar.css
└── ComponentesNavbar/
    └── NavButton/
        ├── NavButton.jsx
        ├── NavButton.css
        └── ComponentesNavButton/
```

`Navbar.jsx` importa a sus hijos:

```jsx
import { NavButton } from './ComponentesNavbar/NavButton/NavButton'
```

## Reglas

1. **Una carpeta por componente.** El nombre de la carpeta es el nombre del componente en PascalCase.
2. **El CSS vive junto al componente**, no en un `styles.css` global. Solo `src/index.css` guarda tokens globales.
3. **Los subcomponentes van en una carpeta llamada `Componentes<NombreComponente>`** dentro de la carpeta del padre, y a su vez siguen la misma regla.
4. **Imports siempre explícitos hacia la ruta profunda.** Nada de barrel files (`index.js`).
5. **Un componente por archivo**, con `export function NombreComponente()`.
6. **CSS con Scope por clase.**
7. **Estilos por componente, no inline.** Nada de `style={{}}`.
8. **Bootstrap para layout y espaciado**, CSS propio para color/tipografía.
