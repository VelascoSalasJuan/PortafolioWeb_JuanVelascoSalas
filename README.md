# BOBEDAS — Tienda Virtual

Tienda virtual para materiales de listón y cintillo, construida con **React + Vite + Bootstrap 5** y
publicada automáticamente en **GitHub Pages**.

## Stack

| Capa | Herramienta |
| --- | --- |
| UI | React 19 (JSX) + componentes anidados |
| Estilos | Bootstrap 5.3 (solo CSS) + variables CSS propias |
| Build | Vite 8 |
| Routing | React Router 7 (`HashRouter`, compatible con Pages) |
| Deploy | GitHub Actions → GitHub Pages |

## Puesta en marcha

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # previsualiza el build
npm run lint     # ESLint
```

## Estructura

```
src/
├── components/
│   ├── carrito/     # CarritoProvider (contexto global del carrito)
│   ├── layout/      # Layout, Navbar, Footer
│   └── producto/    # ProductCard, ProductGrid
├── context/         # contexto del carrito + hook useCarrito
├── data/            # catálogo de productos (productos.js)
├── pages/           # Home, Catalogo, DetalleProducto, Carrito, Contacto, NoEncontrado
├── config.js        # datos de la empresa, moneda y formateo de precios
├── index.css        # tema de marca sobre Bootstrap
└── App.jsx          # rutas
```

## Personalización

- **Productos**: edita `src/data/productos.js`.
- **Empresa y moneda**: edita `src/config.js` (`CONFIG` y `MONEDA`).
- **Colores y tipografía**: variables CSS al inicio de `src/index.css`.
- **Imágenes**: de momento usan `picsum.photos` como placeholder; reemplázalas por tus fotos.

## Publicación en GitHub Pages

1. Sube el proyecto a un repositorio y empuja a `main`.
2. En el repositorio: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Cada `push` a `main` vuelve a construir y publicar el sitio.

`vite.config.js` usa `base: './'` para que la web funcione tanto en
`usuario.github.io/repo` como en `usuario.github.io`.
