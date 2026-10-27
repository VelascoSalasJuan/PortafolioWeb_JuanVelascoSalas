# AGENTS.md — Web Personal

> Reglas normativas para este proyecto. Aplicar siempre antes de escribir código.

## Contexto rápido

- **Frontend:** React 19 + Vite 8 + Bootstrap 5 (en `frontend/`)
- **Backend:** Node.js + Express 5 (en `backend/`)
- Estilos: `src/index.css` (reset mínimo). Resto de estilos por componente.

## Convención obligatoria: jerarquía de componentes

**Sigue estrictamente la regla definida en la bóveda.**

- Lee `Boveda_Obsidian/10-Instrucciones/Jerarquia-de-componentes.md` al empezar si vas a crear o mover componentes.
- **Una carpeta por componente.** `NombreComponente/NombreComponente.jsx` + `NombreComponente.css` + carpeta `components/` para sus subcomponentes.
- **Los subcomponentes repiten la misma estructura.**
- **Sin barrel files.** Imports explícitos a rutas profundas.
- **CSS por componente, clases raíz propias, sin `style={{}}`.** Usa variables CSS globales para colores/branding.
- **Sin comentarios.**

## Flujo con la bóveda de Obsidian

- Tarea no trivial → guarda resumen en `Boveda_Obsidian/20-Notas/`.
- Nueva regla → guarda en `Boveda_Obsidian/10-Instrucciones/`.
- Decisión técnica → guarda en `Boveda_Obsidian/00-Proyecto/`.

## Comandos útiles

```bash
npm run dev
npm run build
npm run lint
```

## Reglas de ejecución

- Después de editar archivos, ejecuta `npm run lint` si hay cambios de código.
- `npm run build` debe pasar antes de dar la tarea por terminada si se tocaron rutas/componentes.
- No añadas comentarios al código.
- Respeta el español en UI y en las notas de la bóveda.
- No uses `&&` en comandos de shell de Windows; usa `;` o dos comandos separados.
