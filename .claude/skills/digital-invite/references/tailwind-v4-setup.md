# Tailwind v4 — Configuración para Invitaciones Digitales

Tailwind v4 abandona `tailwind.config.js` por completo. Toda la configuración vive en CSS usando la directiva `@theme`. Esta guía cubre el setup completo para Astro y Next.js.

---

## Lo que cambió en v4 (vs v3)

| v3 | v4 |
|---|---|
| `tailwind.config.js` | `@theme` en CSS |
| `theme.extend.colors` | `--color-*: oklch(...)` |
| `theme.extend.fontFamily` | `--font-*: "Nombre", fallback` |
| `theme.extend.spacing` | `--spacing-*: valor` |
| `@apply text-primary` | `text-[var(--color-invite-primary)]` |
| `bg-gray-100` | Sigue funcionando (colores base de Tailwind) |
| `arbitrary values [#hex]` | Usar variables CSS / oklch directamente |

---

## Setup en Astro

### Instalación

```bash
# Crear proyecto Astro
npm create astro@latest my-invitation -- --template minimal

cd my-invitation

# Instalar Tailwind v4 (paquete unificado)
npm install tailwindcss@next @tailwindcss/vite@next
```

### Configurar el plugin en astro.config.mjs

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

### Archivo CSS global

```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  /* Tokens de la invitación — ver style-profiles.md */
  --color-invite-bg: oklch(97% 0.01 85);
  --color-invite-surface: oklch(94% 0.015 80);
  --color-invite-primary: oklch(55% 0.08 55);
  --color-invite-accent: oklch(50% 0.06 50);
  --color-invite-text: oklch(25% 0.02 60);
  --color-invite-muted: oklch(55% 0.03 70);

  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Jost", "Helvetica Neue", sans-serif;
  --font-script: "Great Vibes", cursive;

  --text-hero: clamp(3rem, 8vw, 5.5rem);
  --text-title: clamp(1.75rem, 4vw, 2.5rem);
  --text-subtitle: clamp(1.125rem, 2.5vw, 1.375rem);
  --text-body: 1rem;
  --text-caption: 0.875rem;

  --spacing-section: 6rem;
  --spacing-block: 3rem;
  --spacing-element: 1.5rem;

  --invite-max-w: 680px;
  --invite-hero-max-w: 960px;
  --invite-text-max-w: 540px;
}

/* Estilos base globales */
@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: var(--color-invite-bg);
    color: var(--color-invite-text);
    font-family: var(--font-body);
  }
}
```

### Layout principal

```astro
---
// src/layouts/InviteLayout.astro
import '../styles/global.css';

interface Props {
  title: string;
  description?: string;
  ogImage?: string;
}
const { title, description = '', ogImage } = Astro.props;
---
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {ogImage && <meta property="og:image" content={ogImage} />}
    <meta property="og:title" content={title} />
    <!-- Fuentes de Google -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&family=Great+Vibes&display=swap" rel="stylesheet" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

---

## Setup en Next.js (App Router)

### Instalación

```bash
npx create-next-app@latest my-invitation --typescript --app --no-tailwind

cd my-invitation

# Instalar Tailwind v4
npm install tailwindcss@next @tailwindcss/postcss@next postcss
```

### Configurar PostCSS

```js
// postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

### Archivo CSS global

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Pegar tokens aquí — igual que en Astro */
  --color-invite-bg: oklch(97% 0.01 85);
  /* ... resto de tokens ... */
}

@layer base {
  html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
  body { background-color: var(--color-invite-bg); color: var(--color-invite-text); font-family: var(--font-body); }
}
```

### Root layout con fuentes

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost, Great_Vibes } from 'next/font/google';
import './globals.css';

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

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
});

export const metadata: Metadata = {
  title: 'Invitación',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable} ${greatVibes.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

---

## Cómo usar los tokens en clases de Tailwind v4

En v4, los tokens CSS se usan con la sintaxis de valor arbitrario o directamente cuando Tailwind los infiere:

```html
<!-- Color de fondo -->
<div class="bg-[var(--color-invite-bg)]">

<!-- Texto con color de token -->
<p class="text-[var(--color-invite-muted)]">

<!-- Tamaño de fuente con token clamp() -->
<h1 class="text-[var(--text-hero)]">

<!-- Espaciado -->
<section class="py-[var(--spacing-section)]">

<!-- Max-width custom -->
<div class="max-w-[var(--invite-max-w)]">

<!-- Font family -->
<h1 class="font-[var(--font-display)]">

<!-- Opacity sobre color token -->
<div class="bg-[var(--color-invite-accent)]/20">

<!-- Border con color token -->
<div class="border border-[var(--color-invite-accent)]/30">
```

---

## Animaciones de entrada (Tailwind v4)

```css
/* En global.css */
@layer utilities {
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(1.5rem); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-1rem); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in {
    animation: fadeIn 1.2s ease forwards;
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.9s ease forwards;
  }

  /* Delays para animar elementos en secuencia */
  .delay-100 { animation-delay: 100ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-500 { animation-delay: 500ms; }
  .delay-700 { animation-delay: 700ms; }
  .delay-900 { animation-delay: 900ms; }

  /* Estado inicial para elementos que van a animar */
  .opacity-0-initial {
    opacity: 0;
  }
}
```

Uso:
```html
<h1 class="opacity-0-initial animate-fade-in-up delay-300">Nombre del evento</h1>
<p class="opacity-0-initial animate-fade-in-up delay-500">Fecha</p>
```

---

## Oklch — Referencia rápida

Oklch es el espacio de color recomendado para Tailwind v4. Es perceptualmente uniforme y produce mejores gradientes.

```
oklch(L% C H)
  L = Lightness   0% (negro) → 100% (blanco)
  C = Chroma      0 (gris) → ~0.4 (saturado)
  H = Hue         0-360°
      0/360 = rojo
      60    = amarillo
      120   = verde
      180   = cian
      240   = azul
      300   = magenta

Herramienta: https://oklch.com
```

### Paletas frecuentes para invitaciones

```css
/* Crema / Champagne */
--color-bg-cream: oklch(97% 0.01 85);
--color-gold-soft: oklch(72% 0.09 75);
--color-gold-rich: oklch(60% 0.1 70);

/* Rosas */
--color-blush: oklch(92% 0.02 350);
--color-rose-medium: oklch(72% 0.1 340);
--color-dusty-rose: oklch(60% 0.09 330);

/* Azules corporativos */
--color-navy: oklch(30% 0.08 250);
--color-blue-brand: oklch(55% 0.18 250);
--color-slate: oklch(55% 0.04 240);

/* Verdes botánicos */
--color-sage: oklch(68% 0.07 145);
--color-forest: oklch(40% 0.1 155);
--color-mint: oklch(85% 0.06 165);
```
