# Portfolio de Bryan Castaño

Portfolio de una sola página creado con React, Vite, Tailwind CSS 4 y GSAP. Reúne proyectos, experiencia, formación, perfil técnico y contacto en una secuencia pensada para reclutadores.

## Desarrollo

```bash
npm install
npm run dev
```

## Comprobaciones

```bash
npm run build
npm run lint
npm run test:e2e
```

Las pruebas de navegador comprueban la página a 3840, 1440, 768, 430, 390 y 320 píxeles, la ausencia de desbordamiento horizontal, el enlace al CV, el menú móvil y la respuesta visual de los proyectos al pasar el ratón. Playwright necesita Chromium instalado con `npx playwright install chromium`.

## Contenido

- Los proyectos, puestos, estudios y tecnologías se mantienen en `src/portfolioData.js`.
- El CV que descarga la web se genera con `scripts/build_cv.py`, usando el Python del entorno con ReportLab.
- La versión anterior del portfolio se conserva en la rama `main-old`.

## Dirección visual

La paleta combina un fondo granate casi negro (`#171313`), texto marfil (`#f0e9de`) y acentos cobre (`#d99578`). El fondo oscuro da presencia a las capturas y al retrato, mientras que la tipografía de gran tamaño concentra la atención en el nombre y los proyectos. La fotografía se adaptó cromáticamente sin cambiar la identidad del retratado.

Se estudiaron portfolios profesionales actuales como [Pablo Míguez](https://www.pablomiguez.dev/projects/portfolio), [Antoine Sillard](https://www.a-nerow.fr/en/projects/portfolio-personnel) y [Jeremy Antoni](https://www.jeremyantoni.com/projects/portfolio). Para los estados hover se revisó [InfoLaVelada](https://www.infolavelada.com/) y se adaptó su combinación de movimiento, borde iluminado y respuesta de imagen y flecha a la paleta de esta web. La composición y paleta son propias.

Para el proceso se instalaron y usaron las skills `find-skills`, `frontend-design`, `gsap-react`, `gsap-scrolltrigger`, `react-best-practices` y `redesign-skill`.
