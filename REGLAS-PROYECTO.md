# REGLAS-PROYECTO.md

> Fuente de verdad del proyecto. Cada vez que se abra un proyecto nuevo o cambie de IA, debe leerse primero y seguirse sin excepción.

## 1. Estructura general

- La carpeta raíz del proyecto contiene dos carpetas separadas: `frontend/` y `backend/`.
- Cada una es un proyecto independiente, con su propio `package.json`, sus propias dependencias y su propia carpeta `src/`.
- Nunca se mezclan en un mismo `src/`.

## 2. Frontend (`frontend/`)

- Tecnologías: HTML, CSS, JavaScript, React y Bootstrap (solo para el diseño).
- **Jerarquía de componentes anidados (OBLIGATORIA):**
  - Cada componente tiene su propia carpeta con tres elementos: su archivo `.jsx`, su archivo de estilos (`.css`) y una carpeta `components/`.
  - Dentro de `components/`, cada subcomponente repite la misma estructura (su `.jsx`, su `.css` y su propia carpeta `components/`), tantas veces como sea necesario.
  - Sin barrel files. Imports explícitos a rutas profundas.
  - Sin comentarios. Sin `style={{}}`.
- Las páginas (una por ruta) van en `pages/`.
- El contexto global va en `context/`.
- Las llamadas a la API van en `services/`, nunca directamente dentro de los componentes.
- Las imágenes y archivos estáticos van en `src/assets/` o `public/`.

## 3. Backend (`backend/`)

- Tecnologías: Node.js con Express.
- **Organización POR MÓDULOS (OBLIGATORIA):**
  - Dentro de `src/modules/`, cada funcionalidad tiene su propia carpeta con todo lo suyo adentro (`*.routes.js`, `*.controller.js`, `*.service.js`, `*.model.js`).
  - Ejemplo: `modules/proyectos/`, `modules/contacto/`.
  - Los módulos son hermanos entre sí (un solo nivel); **no** se anidan módulos dentro de módulos.
- Archivos comunes fuera de los módulos:
  - `src/config/` (por ejemplo la conexión a la base de datos)
  - `src/app.js` (configuración de Express)
  - `src/server.js` (arranque)
- Las claves y datos de conexión van en `.env`, que **nunca** se sube a Git.

## 4. Cómo comunicarse

- El frontend se comunica con el backend mediante una **API REST** que devuelve **JSON**.
- Para este proyecto **no hay base de datos definida todavía**; se decidirá más adelante.

## 5. Forma de trabajar

- Explícame en palabras sencillas lo que haces y por qué.
- Avanza por pasos pequeños y espera mi confirmación antes de pasar al siguiente.
- Si una decisión cambia las reglas de arriba, actualiza `REGLAS-PROYECTO.md`.
