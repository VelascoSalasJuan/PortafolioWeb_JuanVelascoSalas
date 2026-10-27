# Flujo de trabajo con el vault

> Estas reglas las lee el agente (opencode) al inicio de cada sesión en este proyecto.

## Dónde vive el vault

`vault/` dentro del repo. Es un vault de Obsidian válido (tiene `.obsidian/`), así que
puedes abrirlo en la app con **Abrir carpeta como bóveda**.

## Reglas

1. **Al terminar una tarea no trivial**, guarda el resultado en el vault.
   - Decisión de diseño o arquitectura → `00-Proyecto/`
   - Regla o convención nueva → `10-Instrucciones/`
   - Resumen de una sesión de chat → `20-Notas/`
2. **Usa las herramientas `obsidian_*`** (MCP) para escribir, no edites `vault/**` con
   `edit`/`write` salvo que el MCP no esté disponible. El MCP da transacciones, `etag`
   y evita pisar ediciones concurrentes.
3. **Antes de escribir una nota**, busca si ya existe una con el mismo tema
   (`obsidian_search_vault`) y **actualízala** en lugar de crear un duplicado.
4. **Nombra las notas en español, con guiones**: `Jerarquia-de-componentes.md`,
   `Decision-carrito-persistencia.md`.
5. **Una nota = un tema.** Si mezclas dos temas, divídela.
6. **Usa wikilinks** `[[Nombre-de-la-nota]]` para enlazar notas relacionadas.
7. **Etiqueta las notas de sesión** con `#session` y la fecha: `#session/2026-10-21`.
8. **Añade enlaces a `00-Proyecto/Indice.md`** cuando creas una nota de proyecto o instrucción.

## Plantillas

- Copia `30-Recursos/Plantilla-nota.md` para notas de sesión.
- Copia `30-Recursos/Plantilla-decision.md` para decisiones técnicas.

## Respetar las instrucciones existentes

Las notas de `10-Instrucciones/` son **normativas**. Antes de escribir código, léelas
y aplícalas. Si una instrucción nueva contradice a otra existente, actualiza la nota
antigua en vez de crear un conflicto silencioso.
