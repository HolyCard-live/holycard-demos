# Perfiles de Estilo para Invitaciones Digitales

Cada perfil es un sistema completo: tokens, tipografías, paleta, separadores recomendados y patrones de layout. Úsalos como punto de partida y ajusta según los colores del cliente.

---

## Perfil 1: Boda Elegante

**Mood**: Atemporal, sofisticado, íntimo. Como una invitación impresa de lujo, pero digital.

### Tokens CSS

```css
@import "tailwindcss";

@theme {
  /* Paleta: crema, dorado suave, off-white */
  --color-invite-bg: oklch(97% 0.01 85);         /* Crema cálido */
  --color-invite-surface: oklch(94% 0.015 80);   /* Crema más profundo */
  --color-invite-primary: oklch(55% 0.08 55);    /* Dorado apagado */
  --color-invite-accent: oklch(50% 0.06 50);     /* Dorado oscuro */
  --color-invite-text: oklch(25% 0.02 60);       /* Café muy oscuro */
  --color-invite-muted: oklch(55% 0.03 70);      /* Café medio */

  /* Tipografía */
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Jost", "Helvetica Neue", sans-serif;
  --font-script: "Great Vibes", cursive;

  /* Escalas */
  --text-hero: clamp(3rem, 8vw, 5.5rem);
  --text-title: clamp(1.75rem, 4vw, 2.5rem);
  --text-subtitle: clamp(1.125rem, 2.5vw, 1.375rem);
  --text-body: 1rem;
  --text-caption: 0.875rem;
  --text-detail: 0.75rem;

  /* Espaciado */
  --spacing-section: 7rem;
  --spacing-block: 3.5rem;
  --spacing-element: 1.5rem;

  /* Geometría */
  --radius-invite: 0px;
  --invite-max-w: 660px;
  --invite-hero-max-w: 900px;
}
```

### Separadores recomendados
- **Principal**: `Geo-1` (Art Deco línea)
- **Secundario**: `Min-3` (Doble línea fina)
- **Acento floral**: `Floral-1` (solo en hero y cierre)

### Patrones de layout

**Hero**: Full-width, fondo `invite-bg`, imagen o textura opcional. Nombres en `font-script` tamaño grande, fecha en `font-display` con letter-spacing amplio.

```html
<section class="min-h-screen flex flex-col items-center justify-center px-6 bg-[var(--color-invite-bg)]">
  <p class="font-[var(--font-script)] text-[var(--color-invite-muted)] text-2xl mb-4">
    Nos casamos
  </p>
  <h1 class="font-[var(--font-display)] font-light text-[var(--text-hero)] text-[var(--color-invite-text)] text-center leading-tight italic">
    Ana & Carlos
  </h1>
  <div class="mt-6 flex items-center gap-4">
    <div class="w-16 h-px bg-[var(--color-invite-accent)]/50"></div>
    <p class="font-[var(--font-body)] text-[var(--color-invite-muted)] text-[var(--text-caption)] tracking-[0.3em] uppercase">
      15 de Marzo · 2026
    </p>
    <div class="w-16 h-px bg-[var(--color-invite-accent)]/50"></div>
  </div>
</section>
```

**Sección de detalles**: Columna central, alternancia de bloques en `surface` y `bg`.

**Countdown**: Números en `font-display`, etiquetas en `font-body` tracking-widest.

### Animaciones
Fade-in con `animate-[fadeIn_1.2s_ease_forwards]` y delays escalonados. Nada de parallax agresivo — la elegancia está en la sutileza.

---

## Perfil 2: XV Años Romántico

**Mood**: Femenino, floral, celebratorio pero delicado. Más expresivo que una boda pero con gracia.

### Tokens CSS

```css
@import "tailwindcss";

@theme {
  /* Paleta: rosa polvo, blanco roto, lavanda suave */
  --color-invite-bg: oklch(98% 0.01 350);          /* Blanco con toque rosado */
  --color-invite-surface: oklch(95% 0.025 340);    /* Rosa muy suave */
  --color-invite-primary: oklch(72% 0.12 340);     /* Rosa medio */
  --color-invite-accent: oklch(60% 0.1 330);       /* Rosa oscuro / Dusty rose */
  --color-invite-text: oklch(28% 0.04 320);        /* Morado muy oscuro */
  --color-invite-muted: oklch(58% 0.06 330);       /* Rosa grisáceo */

  /* Tipografía */
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Raleway", "Helvetica Neue", sans-serif;
  --font-script: "Dancing Script", cursive;

  /* Escalas */
  --text-hero: clamp(2.75rem, 7vw, 5rem);
  --text-title: clamp(1.5rem, 3.5vw, 2.25rem);
  --text-subtitle: clamp(1rem, 2.5vw, 1.25rem);
  --text-body: 1rem;
  --text-caption: 0.875rem;
  --text-detail: 0.75rem;

  /* Espaciado */
  --spacing-section: 6rem;
  --spacing-block: 3rem;
  --spacing-element: 1.25rem;

  /* Geometría */
  --radius-invite: 4px;
  --invite-max-w: 680px;
}
```

### Separadores recomendados
- **Principal**: `Floral-1` (rama con flores) o `Floral-2` (botánico)
- **Especial**: `Floral-3` (corona) para el hero o sección de la quinceañera
- **Cierre**: `Min-2` (tres puntos) para pausas suaves

### Patrones de layout

**Hero**: El nombre de la quinceañera es el protagonista absoluto. Fondo con textura floral sutil (SVG background pattern o imagen bokeh).

```html
<section class="min-h-screen relative flex flex-col items-center justify-center px-6 overflow-hidden bg-[var(--color-invite-bg)]">
  <!-- Ornamento superior -->
  <div class="text-[var(--color-invite-accent)]/40 w-48 mb-8">
    <!-- Floral-3 SVG (corona) -->
  </div>
  <p class="font-[var(--font-body)] text-[var(--color-invite-muted)] text-[var(--text-caption)] tracking-[0.4em] uppercase mb-3">
    Mis XV años
  </p>
  <h1 class="font-[var(--font-script)] text-[var(--text-hero)] text-[var(--color-invite-text)] text-center leading-none">
    Valentina
  </h1>
  <p class="font-[var(--font-display)] italic text-[var(--color-invite-muted)] text-[var(--text-subtitle)] mt-4">
    te invita a su celebración
  </p>
</section>
```

**Sobre mí / Historia**: Foto de la quinceañera con texto. Layout asimétrico: imagen izquierda, texto derecha (o stacked en mobile).

### Animaciones
`fadeInUp` con delays escalonados para los elementos del hero. Suave y femenino.

---

## Perfil 3: Evento Corporativo

**Mood**: Profesional, confiable, aspiracional. La invitación debe comunicar que el evento vale la pena asistir.

### Tokens CSS

```css
@import "tailwindcss";

@theme {
  /* Paleta: azul marino, blanco, un acento vibrante */
  --color-invite-bg: oklch(98% 0.005 240);           /* Casi blanco */
  --color-invite-surface: oklch(96% 0.008 240);      /* Gris muy suave */
  --color-invite-primary: oklch(30% 0.08 250);       /* Azul marino */
  --color-invite-accent: oklch(60% 0.2 250);         /* Azul vibrante */
  --color-invite-text: oklch(18% 0.02 250);          /* Negro azulado */
  --color-invite-muted: oklch(55% 0.03 240);         /* Gris azulado */

  /* Para eventos con color de marca diferente,
     solo reemplaza --color-invite-accent y --color-invite-primary */

  /* Tipografía */
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "Inter", "Helvetica Neue", sans-serif;
  /* Sin script */

  /* Escalas — más contenidas */
  --text-hero: clamp(2.25rem, 5vw, 3.75rem);
  --text-title: clamp(1.375rem, 3vw, 1.875rem);
  --text-subtitle: clamp(1rem, 2vw, 1.125rem);
  --text-body: 1rem;
  --text-caption: 0.875rem;
  --text-detail: 0.75rem;

  /* Espaciado — más denso que boda */
  --spacing-section: 5rem;
  --spacing-block: 2.5rem;
  --spacing-element: 1.25rem;

  /* Geometría — más estructurado */
  --radius-invite: 0px;
  --invite-max-w: 720px;
}
```

### Separadores recomendados
- **Principal**: `Geo-1` o `Geo-2` (geométricos)
- **Secundario**: `Min-1` (línea con texto/símbolo)
- **Nunca**: florales

### Patrones de layout

**Hero**: Puede ser dark (fondo `primary`) con texto claro. Logo del evento prominente.

```html
<section class="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-[var(--color-invite-primary)]">
  <!-- Logo del evento -->
  <img src="/logo-evento.svg" alt="Logo" class="h-16 mb-10 brightness-0 invert"/>
  <p class="font-[var(--font-body)] text-white/60 text-[var(--text-caption)] tracking-[0.4em] uppercase mb-4">
    Te invitamos a
  </p>
  <h1 class="font-[var(--font-display)] font-bold text-[var(--text-hero)] text-white text-center leading-tight max-w-2xl">
    Nombre del Evento 2026
  </h1>
  <p class="font-[var(--font-body)] text-[var(--color-invite-accent)] text-[var(--text-subtitle)] mt-6 tracking-wide">
    Ciudad · Fecha
  </p>
</section>
```

**Speakers / Ponentes**: Grid de cards. Foto circular + nombre + cargo + empresa.

**Agenda / Programa**: Timeline vertical o tabla limpia.

**CTA de registro**: Botón prominente con `bg-[var(--color-invite-accent)]`.

### Animaciones
Mínimas o ninguna. Si se usan, solo `fadeIn` sutil. La velocidad y profesionalismo importan más que la ornamentación.

---

## Perfil 4: Evento Corporativo — Marca Propia

**Cuándo usar**: El cliente trae su propio branding (logo, colores hex).

### Adaptación de tokens

```css
/* Recibe los colores del cliente y los convierte a oklch */
/* Herramienta: https://oklch.com para convertir hex → oklch */

@theme {
  /* Ejemplo: marca con verde corporativo #2D6A4F y acento amarillo #E9C46A */
  --color-invite-primary: oklch(40% 0.1 155);    /* Verde #2D6A4F */
  --color-invite-accent: oklch(80% 0.13 80);     /* Amarillo #E9C46A */
  --color-invite-bg: oklch(98% 0.005 155);       /* Blanco con toque verde */
  --color-invite-surface: oklch(95% 0.01 155);
  --color-invite-text: oklch(20% 0.05 155);
  --color-invite-muted: oklch(55% 0.04 155);
}
```

**Regla**: Nunca cambies `--font-display` y `--font-body` si el cliente ya tiene fuentes de marca. Si las tiene, úsalas con `@font-face` o desde su CDN.

---

## Reglas de consistencia entre perfiles

1. **No mezcles perfiles**: Si empiezas con Boda Elegante, no le metas elementos del perfil Corporativo aunque el cliente los pida. Mejor negocia el balance desde el inicio.

2. **Adaptación de paleta**: Los tokens de color son el único elemento que siempre cambia. La tipografía y los separadores son la "estructura" del perfil y deben mantenerse consistentes.

3. **Sobre los gradientes**: Bodas y XV pueden usar gradientes muy sutiles (`from-[var(--color-invite-bg)] to-[var(--color-invite-surface)]`). Corporativo evita gradientes decorativos.

4. **Dark mode**: Las invitaciones raramente necesitan dark mode. Si el cliente lo pide, propón mejor un "modo nocturno" para el hero (fondo oscuro solo en la primera sección).
