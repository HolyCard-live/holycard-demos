# Sistema de Espaciado y Layout para Invitaciones Digitales

Las invitaciones digitales tienen necesidades de espaciado muy distintas a las de una app o sitio web informativo. Son verticalmente generosas, centradas en el contenido emocional, y usan el espacio en blanco como parte del diseño.

---

## Principio fundamental: Ritmo vertical

El espaciado no es arbitrario — sigue un ritmo que el ojo percibe aunque no lo note conscientemente. Usar valores inconsistentes rompe ese ritmo y hace que la invitación se vea "apresurada" o "barata".

### Escala de espaciado para invitaciones

Define siempre estos 3 niveles en `@theme`:

```css
@theme {
  --spacing-section: 6rem;   /* Entre secciones mayores (hero → detalles → RSVP) */
  --spacing-block: 3rem;     /* Entre bloques dentro de una sección */
  --spacing-element: 1.5rem; /* Entre elementos dentro de un bloque (párrafos, íconos) */
}
```

**Por qué 3 niveles y no más**: Las invitaciones son documentos lineales con pocas jerarquías. Más de 3 niveles crea inconsistencia; menos de 3 aplana la jerarquía.

**Ajuste por estilo**:
- Elegante/Lujo: multiplica por 1.2 (más aire = más lujo)
- XV años/Festivo: usa los valores base
- Corporativo: multiplica por 0.85 (más denso = más información)

---

## Layout de columna central

Las invitaciones NO son sitios web multi-columna. Usa siempre una columna central:

```css
@theme {
  --invite-max-w: 680px;       /* Contenido general */
  --invite-hero-max-w: 960px;  /* Hero y elementos full-attention */
  --invite-text-max-w: 540px;  /* Párrafos de texto largo */
}
```

### Container base

```html
<!-- Sección estándar -->
<section class="w-full px-5 md:px-8 py-[var(--spacing-section)]">
  <div class="mx-auto max-w-[var(--invite-max-w)]">
    <!-- contenido -->
  </div>
</section>

<!-- Para texto de lectura (mayor o historia) -->
<section class="w-full px-5 md:px-8 py-[var(--spacing-section)]">
  <div class="mx-auto max-w-[var(--invite-text-max-w)]">
    <!-- texto corrido -->
  </div>
</section>

<!-- Hero o sección con foto full-attention -->
<section class="w-full min-h-screen relative">
  <!-- Elemento full-width -->
  <div class="absolute inset-0 ..."></div>
  <!-- Contenido central -->
  <div class="relative mx-auto max-w-[var(--invite-hero-max-w)] px-6 ...">
    <!-- hero content -->
  </div>
</section>
```

---

## Breakpoints relevantes para invitaciones

Las invitaciones se ven principalmente en mobile (compartidas por WhatsApp, Instagram DMs). El diseño debe ser **mobile-first**.

```
sm:  640px  — Teléfonos grandes / small tablets
md:  768px  — Tablets / landscape móvil
lg:  1024px — Desktop mínimo (raramente relevante en invitaciones)
```

### Patrón mobile-first para secciones

```html
<!-- Detalles del evento: stack en mobile, grid en tablet+ -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-[var(--spacing-block)] md:gap-[var(--spacing-element)]">
  <div class="flex flex-col items-center text-center gap-[var(--spacing-element)]">
    <!-- Fecha -->
  </div>
  <div class="flex flex-col items-center text-center gap-[var(--spacing-element)]">
    <!-- Hora -->
  </div>
  <div class="flex flex-col items-center text-center gap-[var(--spacing-element)]">
    <!-- Lugar -->
  </div>
</div>
```

---

## Patrones de espaciado por tipo de sección

### Hero

```
padding-top:    10vh a 15vh (desde el navbar si hay, o desde el top)
padding-bottom: 10vh
contenido:      flex-col + items-center + justify-center + gap basado en --spacing-element
min-height:     100svh (usar svh para móvil correcto)
```

```html
<section class="min-h-svh flex flex-col items-center justify-center px-6 py-16 gap-[var(--spacing-element)]">
```

### Detalles del evento

```
padding:     var(--spacing-section) vertical
interior:    var(--spacing-block) entre grupos de info
icono+texto: var(--spacing-element) de gap
```

```html
<section class="py-[var(--spacing-section)] px-5 md:px-8">
  <div class="mx-auto max-w-[var(--invite-max-w)] flex flex-col gap-[var(--spacing-block)]">
    <h2 class="...">Detalles</h2>
    <div class="flex flex-col gap-[var(--spacing-element)]">
      <!-- items -->
    </div>
  </div>
</section>
```

### Sección de texto largo (historia, mensaje, "sobre nosotros")

```
max-width:      var(--invite-text-max-w)
line-height:    1.8 a 2 (más holgado que lo normal)
párrafo gap:    1.5em (relativo al tamaño de fuente)
```

```html
<div class="max-w-[var(--invite-text-max-w)] mx-auto">
  <p class="font-[var(--font-body)] text-[var(--text-body)] leading-[1.85] text-[var(--color-invite-text)]">
    ...
  </p>
</div>
```

### Countdown / Cuenta regresiva

```
número:  text-4xl a text-6xl, font-display, font-light
label:   text-xs, tracking-widest, uppercase, font-body, muted
gap:     entre número y label: 0.25rem
gap:     entre unidades (días/hrs/min/seg): 2rem a 3rem
```

```html
<div class="flex items-end justify-center gap-8 md:gap-12">
  {['días', 'hrs', 'min', 'seg'].map((unit, i) => (
    <div class="flex flex-col items-center gap-1">
      <span class="font-[var(--font-display)] font-light text-5xl text-[var(--color-invite-text)] tabular-nums">
        00
      </span>
      <span class="font-[var(--font-body)] text-[var(--text-detail)] tracking-[0.25em] uppercase text-[var(--color-invite-muted)]">
        {unit}
      </span>
    </div>
  ))}
</div>
```

### Galería de fotos

```
grid:    2 columnas en mobile, 3 en tablet
gap:     0.5rem a 1rem (tight, las fotos se hablan entre sí)
aspect:  aspect-square o aspect-[4/5]
```

```html
<div class="grid grid-cols-2 md:grid-cols-3 gap-2">
  <div class="aspect-square overflow-hidden bg-[var(--color-invite-surface)]">
    <img src="..." class="w-full h-full object-cover" />
  </div>
  <!-- destacada: ocupa 2 columnas -->
  <div class="aspect-square md:col-span-2 overflow-hidden bg-[var(--color-invite-surface)]">
    <img src="..." class="w-full h-full object-cover" />
  </div>
</div>
```

### RSVP / Formulario

```
card:       border o bg-surface, padding generoso (p-8 md:p-12)
campos:     gap-[var(--spacing-element)] entre inputs
label:      font-body, text-detail, uppercase, tracking-wide, muted
input:      border-b o border (según estilo), sin border-radius en elegante
botón:      w-full en mobile, auto en desktop, padding generoso
```

---

## Reglas de espaciado que nunca se rompen

1. **Los separadores SVG siempre tienen su propio padding**. No uses margin del elemento anterior/siguiente. Envuelve siempre el SVG en `py-8 md:py-12`.

2. **Nunca uses `margin-top` en el primer hijo de una sección**. Usa el `padding` de la sección padre.

3. **El hero siempre es `min-h-svh`** (o `min-h-screen` si no necesitas soporte svh). Nunca `height: 100vh` fijo.

4. **En mobile, nunca menos de `px-5`** para el contenido. El texto que toca los bordes de pantalla se ve descuidado.

5. **Los títulos de sección siempre tienen `mb-[var(--spacing-block)]`** antes del contenido de esa sección.
