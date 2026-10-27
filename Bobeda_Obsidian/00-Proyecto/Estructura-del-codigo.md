# Estructura del código

## Layout actual

```
src/
├── App.jsx                 # Rutas + providers
├── main.jsx                # Entry point, importa Bootstrap e index.css
├── config.js               # CONFIG, MONEDA, formatearPrecio()
├── index.css               # Variables CSS globales + re-tematizado de Bootstrap
├── context/
│   └── carritoContext.js   # createContext + hook useCarrito()
├── data/
│   └── productos.js        # Catálogo estático
├── pages/                  # Un archivo por ruta
│   ├── Home.jsx
│   ├── Catalogo.jsx
│   ├── DetalleProducto.jsx
│   ├── Carrito.jsx
│   ├── Contacto.jsx
│   └── NoEncontrado.jsx
└── components/
    ├── layout/             # Layout, Navbar, Footer, AlCambiarRuta
    ├── producto/           # ProductCard, ProductGrid
    └── carrito/            # CarritoProvider
```

## Stack

- React 19, Vite 8, react-router-dom 7
- Bootstrap 5 (CSS + clases utility) re-tematizado con variables CSS propias
- ESLint 10 con `eslint-plugin-react-hooks` y `react-refresh`

## Scripts

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción a dist/
npm run preview  # previsualiza el build
npm run lint     # ESLint
```

## Puntos de entrada clave

- `src/main.jsx:7` — montaje con `createRoot`
- `src/App.jsx:13` — `CarritoProvider` envuelve todo el árbol
- `src/App.jsx:15` — `HashRouter`
- `src/components/carrito/CarritoProvider.jsx:39` — valor del contexto con `useMemo`
