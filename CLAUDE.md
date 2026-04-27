# Holycard Demos — Invitaciones de Boda Online

Showcase de invitaciones digitales construidas en Astro + Tailwind + GSAP + Lenis, pensadas como referencia comercial. **Cada demo es un archivo `.astro` autocontenido** que vive en `src/pages/demos/<slug>.astro` y representa un estilo, pareja y boda completamente distintos.

## Stack y arquitectura

- **Astro 5** (SSG, `output: static`) con `@astrojs/tailwind`.
- **Tailwind 3.4** — la paleta global (`bot-*`, `cream`, `tan`) sirve solo a la demo botánica original. Cada demo nueva define **sus propios colores y fuentes inline** (CSS variables o utilidades arbitrarias `bg-[#...]`) para no contaminar `tailwind.config.mjs`.
- **GSAP + ScrollTrigger** para animaciones de scroll, parallax, stagger.
- **Lenis** para scroll suave.
- **Howler / YouTube IFrame API** para audio.
- **Lucide Astro** para íconos cuando se necesitan.
- Despliegue estático: `npm run build` → `dist/` → `serve` en producción.

```
src/
  pages/
    index.astro                  ← galería pública con preview de las 8 demos
    invitacion-original.astro    ← Gustave & Sophie (demo legacy, se mantiene)
    demos/
      aurora-editorial.astro
      costa-mediterranea.astro
      maximalismo-floral.astro
      art-deco-gatsby.astro
      wabi-sabi.astro
      neon-retro.astro
      rustico-mexicano.astro
      cottagecore-etereo.astro
  layouts/
    Layout.astro                 ← layout legacy de la demo original
    DemoLayout.astro             ← wrapper minimal: head + Lenis + scroll progress (sin estilos opinados)
  components/                    ← componentes legacy de la demo original
```

> **Decisión:** las demos nuevas **no usan** los componentes en `src/components/` (esos son específicos del estilo botánico de Gustave & Sophie). Cada demo embebe sus secciones inline para mantener autonomía visual y evitar fugas de estilos. Dios está en los detalles.

## Investigación: qué tienen las mejores invitaciones online

Resumen de patrones observados en Zola, Joy, The Knot, Minted, Riley & Grey, Greenvelope, Paperless Post, Withjoy y estudios mexicanos premium (Bodas.com.mx, Magnolia, Save the Date MX). Todas las demos deben cubrir **al menos 12 de las 15 secciones**:

1. **Splash / sobre animado** — primer toque, marca tono. Debe ser interactivo (clic para abrir).
2. **Hero** — nombres + fecha + ubicación principal. Foto o ilustración a pantalla completa.
3. **Cita / verso** — frase corta que define la voz emocional.
4. **Mensaje personal** — carta breve de la pareja al invitado.
5. **Countdown** — contador en vivo a la fecha de boda.
6. **Nuestra historia** — timeline cómo se conocieron, hitos, propuesta.
7. **Galería de fotos** — 4-9 imágenes de la pareja (`unsplash.com` con `auto=format&fit=crop`).
8. **Itinerario del día** — ceremonia, cocktail, banquete, fiesta, hora exacta.
9. **Ubicaciones** — ceremonia + recepción con mapa (link a Google Maps en demo) y dirección.
10. **Dress code** — formalidad + paleta sugerida con swatches de color.
11. **Regalos / mesa** — texto delicado + opciones (transferencia, registry, sobre, luna de miel).
12. **RSVP** — confirmación con nombre, número de acompañantes, restricción alimentaria, canción que harías sonar.
13. **Playlist** — canciones sugeridas o reproductor con tema de la pareja.
14. **Hashtag / Instagram** — `#NombreYNombre2027`, prompt para subir fotos.
15. **Cierre / agradecimiento** — frase final, firma, "Te esperamos".

**Otros patrones recurrentes:**
- Sticky mini-header tras hacer scroll (nombres + fecha) — facilita orientación en docs largos.
- Scroll progress bar superior.
- Política sobre niños / adults-only (cuando aplica) redactada con cariño.
- Botón "Agregar al calendario" (lo simulamos como link `.ics` o anchor decorativo).
- Sección de hospedaje sugerido (hoteles cercanos con tarifa especial inventada).
- Mapa estilizado SVG de cómo llegar (parking, ruta).
- Animaciones suaves en scroll (no agresivas), parallax sutil en imágenes.

## Directrices de diseño y código

### Filosofía visual
- **Cada demo es un universo cerrado.** Tono de voz, paleta, tipografía y composición deben sentirse coherentes. No mezclar metáforas.
- **Una decisión audaz por demo** — un layout fuera de norma, una tipografía dominante, un color saturado, una animación firma. La demo se recuerda por *eso*.
- **Mobile-first siempre.** Las invitaciones se abren mayoritariamente en celular. La versión desktop es una mejora con más aire, no una reescritura.
- Texto siempre legible. Contraste mínimo AA. La emoción no justifica jerarquía pobre.

### Datos inventados — coherencia
Cada pareja tiene una **biografía mínima coherente**:
- Nombres completos, edades implícitas (25-35), oficios verosímiles (arquitectos, médicos, diseñadores, etc.).
- Lugar real (México o destino), fecha futura (2027), día de la semana correcto.
- Historia de cómo se conocieron con 3-5 hitos concretos (lugar, año, ciudad).
- Padres o padrinos cuando el estilo cultural lo pide (ej. mexicano).
- Nombres de venues plausibles (existencias o ficticios pero verosímiles).
- Hashtag único por pareja.

### Convenciones de código
- Cada demo es un único `.astro`. Secciones como `<section class="...">` consecutivas, scripts al final del archivo.
- Usar `data-animate` para fade-up genérico cuando sea suficiente; animaciones específicas con clases dedicadas.
- **Imágenes:** usar `images.unsplash.com/photo-XXXX?w=1200&auto=format&fit=crop&q=80`. Variar las fotos para que no se repitan entre demos.
- **Fuentes:** importar via Google Fonts en el `<head>` del archivo de la demo (`<link rel="preconnect">` + `<link rel="stylesheet">`). No agregar a `Layout.astro` global.
- **Colores:** definir como CSS custom properties al inicio del archivo (`:root { --c-primary: ...; }`) o usar utilidades arbitrarias de Tailwind `bg-[#hex]`. Evitar tocar `tailwind.config.mjs`.
- **Scripts:** GSAP se carga vía `import` en cada `<script>` dentro del archivo. Cargar `Lenis` solo desde `DemoLayout`.
- **Sin componentes compartidos** entre demos nuevas. Si un patrón se repite mucho, sí justificar un helper, pero por defecto duplicar es preferible a acoplar.

### Animaciones
- Splash: timeline GSAP que abre/revela en ≤1.5s al hacer click.
- Scroll: `ScrollTrigger` para fade-up (y: 24, opacity: 0→1, ease: power2.out).
- Parallax sutil en hero o separadores fotográficos (`scrub: true`).
- Countdown: scale-in + tick suave cada segundo.
- Cuando el tono lo permite, micro-interacciones: hover en CTA, confeti decorativo en RSVP, partículas flotantes (pétalos, neón, papel picado, etc.) acordes al estilo.

### Accesibilidad
- `alt` descriptivo en imágenes.
- `aria-hidden` en SVGs decorativos.
- `aria-label` en botones-icono.
- Foco visible en formulario RSVP.
- `prefers-reduced-motion` deshabilita parallax y partículas (envolver animaciones intensas en `if (!matchMedia('(prefers-reduced-motion: reduce)').matches)`).

### Página index (galería)
- Showcase visual: 8 cards (3×3 con la original al inicio) con thumbnail (color sólido + nombres + estilo + fecha), animación al hover.
- Transición a la demo: link directo. No usar router complejo.
- Tono editorial sobrio para no competir con las demos.

## Comandos

```bash
npm install        # primera vez
npm run dev        # localhost:4321
npm run build      # genera dist/
npm run preview    # sirve dist/ en local
```

## Out of scope (por ahora)

- Backend / RSVP real (los formularios solo simulan envío con feedback visual).
- CMS o panel de admin.
- i18n (todo en español MX).
- Tests automatizados (es showcase visual).
- SEO avanzado por demo (meta tags básicos sí, schema.org no).
