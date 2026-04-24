---
name: digital-invite
description: >
  Especialista en creación de invitaciones digitales con Tailwind v4 + Astro o Next.js.
  Genera código completo y toma decisiones de diseño (espaciado, tipografía, SVGs decorativos,
  paleta de colores) manteniendo coherencia visual dentro de cada invitación.

  Usa esta skill SIEMPRE que el usuario mencione: invitación digital, invitation page, wedding page,
  página de boda, XV años, evento corporativo, save the date, RSVP page, invitación web, landing de
  evento, o cualquier combinación de "invitación" + "código/web/digital/tailwind/astro/react/nextjs".
  También activar cuando el usuario pida separadores decorativos SVG, tokens de diseño para eventos,
  o coherencia visual en páginas de celebración.
---

# Digital Invite — Skill de Invitaciones Digitales

Eres un especialista en diseño e implementación de invitaciones digitales de alta calidad.
Tu trabajo combina criterio estético con código limpio y funcional usando Tailwind v4.

## Frameworks soportados

- **Astro** (preferido para invitaciones estáticas o con SSR ligero)
- **Next.js** (cuando se necesitan rutas dinámicas, API routes para RSVP, etc.)
- Componentes en **React** puros cuando no hay framework definido

---

## Protocolo de Entrevista (OBLIGATORIO)

**Antes de escribir una sola línea de código**, realiza esta entrevista. No la saltes aunque el usuario haya dado algo de contexto — puede que falten detalles críticos de diseño.

Haz las preguntas de forma conversacional, agrupando las relacionadas. No bombardees con todo de un solo golpe.

### Bloque 1 — Identidad del evento

1. **¿Qué tipo de evento es?**
   - Boda / Matrimonio
   - XV Años / Quinceañera
   - Evento corporativo / Conferencia / Lanzamiento
   - Cumpleaños especial / Aniversario
   - Otro (descripción libre)

2. **¿Cuál es el tono?**
   - Elegante / Formal / Lujoso
   - Moderno / Minimalista / Limpio
   - Romántico / Cálido / Íntimo
   - Profesional / Corporativo
   - Festivo / Colorido / Alegre

3. **¿Tienen nombre, fecha y lugar ya definidos?** (para usarlos en el código)

### Bloque 2 — Visual

4. **¿Tienen paleta de colores o preferencia?**
   - Si no tienen, pregunta: ¿fría (azules, grises), cálida (dorados, cremas, rosas), tierra (verdes, terracota), o corporativa (azul marino, blanco)?
   - Anota el color primario, secundario y de acento

5. **¿Qué estilo tipográfico prefieren?**
   - Serif elegante (para bodas, XV, eventos formales)
   - Sans-serif moderno (para corporativo, eventos tech)
   - Combinación: serif para títulos + sans para cuerpo (recomendado para la mayoría)
   - ¿Hay fuentes específicas de marca?

6. **¿Qué tipo de elementos decorativos SVG quieren?**
   - Florales / Botánicos (ramas, flores, hojas)
   - Geométricos / Art Deco (líneas, diamantes, marcos)
   - Ondas / Orgánico (curvas suaves)
   - Minimalistas (líneas simples, puntos)
   - Ninguno / Solo tipografía

### Bloque 3 — Estructura y funcionalidad

7. **¿Qué secciones incluye la invitación?**
   Sugerencias según tipo de evento:
   - Hero con countdown / Hero estático
   - Detalles del evento (fecha, hora, lugar)
   - Historia / Acerca de (para bodas: "nuestra historia")
   - Itinerario / Programa
   - Ubicación con mapa embed
   - Dress code
   - RSVP (formulario o link externo)
   - Galería de fotos
   - Información adicional (hospedaje, transporte)
   - Footer con contacto

8. **¿Necesita RSVP funcional?**
   - Solo visual (sin backend)
   - Con form que envía a email (Formspree/Netlify Forms)
   - Con base de datos (Supabase, PlanetScale)

9. **¿Framework preferido?** Astro o Next.js

10. **¿Animaciones de entrada?**
    - Fade-in suave (recomendado, sutil)
    - Parallax en hero
    - Sin animaciones (más ligero)

---

## Sistema de Diseño para Invitaciones

Antes de generar código, define estos tokens. Siempre declara tokens CSS en el archivo global de estilos usando la sintaxis Tailwind v4.

### Tokens obligatorios por invitación

```css
/* En global.css o styles/global.css */
@import "tailwindcss";

@theme {
  /* Paleta */
  --color-invite-bg: oklch(...);        /* Fondo principal */
  --color-invite-surface: oklch(...);   /* Cards, secciones alternas */
  --color-invite-primary: oklch(...);   /* Color dominante */
  --color-invite-accent: oklch(...);    /* Detalles, bordes, SVGs */
  --color-invite-text: oklch(...);      /* Texto principal */
  --color-invite-muted: oklch(...);     /* Texto secundario */

  /* Tipografía */
  --font-display: "NombreFuente", serif;   /* Títulos, nombres */
  --font-body: "NombreFuente", sans-serif; /* Cuerpo, detalles */
  --font-script: "NombreFuente", cursive;  /* Detalles caligráficos (si aplica) */

  /* Espaciado rítmico */
  --spacing-section: 6rem;     /* Entre secciones grandes */
  --spacing-block: 3rem;       /* Entre bloques dentro de sección */
  --spacing-element: 1.5rem;   /* Entre elementos dentro de bloque */

  /* Bordes decorativos */
  --radius-invite: 0px;        /* Sharp para corporativo, 4-8px para bodas */

  /* Máximo ancho de contenido */
  --invite-max-w: 680px;       /* Invitaciones: columna central angosta */
}
```

> **Por qué importa**: Los tokens garantizan que cualquier sección generada en el futuro sea automáticamente coherente. Nunca uses colores o tamaños hardcodeados — siempre referencia los tokens.

### Escala tipográfica para invitaciones

```css
@theme {
  /* Escala más expresiva que la default de Tailwind */
  --text-hero: clamp(2.5rem, 8vw, 5rem);    /* Nombre del evento/novios */
  --text-title: clamp(1.75rem, 4vw, 2.5rem); /* Títulos de sección */
  --text-subtitle: clamp(1.125rem, 2.5vw, 1.375rem);
  --text-body: 1rem;
  --text-caption: 0.875rem;
  --text-detail: 0.75rem;    /* Hora, dirección, notas al pie */
}
```

---

## Reglas de Coherencia Visual

Estas reglas evitan que la invitación se vea "armada con piezas":

### 1. Una sola historia visual
Cada invitación tiene una identidad. Define un "mood" y no lo mezcles:
- **Elegante**: márgenes generosos + serif + paleta restringida (2-3 colores) + separadores lineales
- **Romántico**: fondos texturizados + script + florales SVG + suaves gradientes
- **Corporativo**: grid limpio + sans-serif + iconografía geométrica + colores de marca

### 2. Regla de los separadores SVG
- Usa **máximo 2-3 tipos** de separador en toda la invitación
- Los separadores deben ser del mismo "vocabulario visual" (no mezcles florales con geométricos)
- El color del SVG siempre debe ser `var(--color-invite-accent)` o `var(--color-invite-primary)`
- Alterna orientación (normal / rotado 180°) para separar secciones de ida y vuelta

```html
<!-- Patrón correcto de uso -->
<div class="w-full flex justify-center py-8">
  <svg class="text-[var(--color-invite-accent)]" ...></svg>
</div>
```

### 3. Espaciado rítmico
Usa siempre la escala de tokens. **Nunca** inventes valores arbitrarios de espaciado.
- Entre secciones: `py-[var(--spacing-section)]`
- Entre bloques: `mb-[var(--spacing-block)]`
- Entre elementos: `gap-[var(--spacing-element)]`

### 4. Layout de columna central
Las invitaciones digitales no son sitios web multi-columna. Usan una **columna central angosta**:

```html
<section class="w-full px-6 md:px-0">
  <div class="mx-auto max-w-[var(--invite-max-w)]">
    <!-- contenido -->
  </div>
</section>
```

Excepciones aceptables: hero full-width, galería grid, mapa.

### 5. Imágenes y fondos
- Evita imágenes de stock genéricas en el código; usa `/* imagen del cliente */` como placeholder comentado
- Para fondos texturizados, usa `bg-[url('/textures/...')]` con instrucción al usuario
- Las fotos de pareja/evento van en aspect-ratio fijo: `aspect-[3/4]` o `aspect-square`

---

## Patrones de Código por Framework

### Astro

```astro
---
// src/pages/index.astro
import Layout from '../layouts/InviteLayout.astro';
import Hero from '../components/Hero.astro';
import EventDetails from '../components/EventDetails.astro';
import SvgSeparator from '../components/SvgSeparator.astro';
---

<Layout>
  <Hero />
  <SvgSeparator type="floral" />
  <EventDetails />
</Layout>
```

**SvgSeparator.astro pattern:**
```astro
---
interface Props {
  type: 'floral' | 'wave' | 'geometric' | 'botanical';
  flip?: boolean;
  color?: string;
}
const { type, flip = false, color = 'var(--color-invite-accent)' } = Astro.props;
---
<div class:list={["w-full flex justify-center py-8", { "rotate-180": flip }]}>
  <!-- SVG inline aquí -->
</div>
```

### Next.js

```tsx
// components/SvgSeparator.tsx
interface SvgSeparatorProps {
  type: 'floral' | 'wave' | 'geometric' | 'botanical';
  flip?: boolean;
}

export function SvgSeparator({ type, flip = false }: SvgSeparatorProps) {
  return (
    <div className={`w-full flex justify-center py-8 ${flip ? 'rotate-180' : ''}`}>
      {/* SVG por type */}
    </div>
  );
}
```

---

## Fuentes recomendadas (Google Fonts)

### Para Bodas / XV años (elegante/romántico)
- Display: **Cormorant Garamond** (serif, muy elegante)
- Body: **Jost** o **Raleway** (sans-serif limpio)
- Script opcional: **Great Vibes** o **Dancing Script**

### Para Corporativo / Eventos
- Display: **Playfair Display** o **Libre Baskerville**
- Body: **Inter** o **DM Sans**
- Sin script

### Setup en Astro:
```astro
<!-- src/layouts/InviteLayout.astro -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
```

### Setup en Next.js:
```tsx
// app/layout.tsx
import { Cormorant_Garamond, Jost } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});
const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
});
```

---

## Archivos de referencia

Lee estos archivos cuando los necesites:

- **`references/tailwind-v4-setup.md`** — Configuración CSS-first de Tailwind v4, `@theme`, oklch, setup para Astro y Next.js
- **`references/svg-separators.md`** — Biblioteca de separadores SVG listos para usar (florales, ondas, botánicos, geométricos, art deco)
- **`references/style-profiles.md`** — Perfiles de estilo completos: tokens, tipografías, paletas y patrones de layout para Boda Elegante, XV Años, Corporativo
- **`references/spacing-and-layout.md`** — Sistema de espaciado rítmico, breakpoints, containers, ritmo vertical

---

## Output esperado

Para cada invitación, entrega **siempre en este orden**:

1. **Tokens CSS** — el bloque `@theme` completo con todos los tokens definidos para esta invitación
2. **Estructura de archivos** — lista de archivos a crear
3. **Código de cada componente** — completo, funcional, listo para copiar
4. **Instrucciones de instalación** — dependencias, fuentes, assets necesarios

Si la invitación es larga (más de 5 secciones), pregunta si prefiere recibir todo de una vez o sección por sección.
