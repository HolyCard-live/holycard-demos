# Biblioteca de Separadores SVG para Invitaciones Digitales

Todos los SVGs están diseñados para:
- Usarse inline en HTML/JSX/Astro
- Colorearse via `currentColor` (o `fill="currentColor"` / `stroke="currentColor"`)
- Escalarse libremente con `width` y `height` o clases de Tailwind
- Insertarse con `rotate-180` para separar en dirección contraria

## Cómo usar

```html
<!-- Siempre envuelve el SVG en este contenedor -->
<div class="w-full flex justify-center items-center py-10">
  <div class="text-[var(--color-invite-accent)] w-64 md:w-80">
    <!-- SVG aquí -->
  </div>
</div>

<!-- Variante volteada (para "cerrar" una sección) -->
<div class="w-full flex justify-center items-center py-10 rotate-180">
  ...
</div>
```

---

## FLORALES

### Floral-1: Rama con flores simples
*Ideal para: bodas, XV años, eventos románticos*
*Vocabulario: orgánico, delicado, femenino*

```svg
<svg viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- Tallo central -->
  <path d="M20 40 Q100 35 200 40 Q300 45 380 40" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <!-- Flores izquierda -->
  <circle cx="70" cy="30" r="3" fill="currentColor"/>
  <circle cx="70" cy="30" r="7" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M70 23 Q67 20 64 23 Q67 18 70 23" fill="currentColor"/>
  <path d="M70 23 Q73 20 76 23 Q73 18 70 23" fill="currentColor"/>
  <!-- Hoja izquierda -->
  <path d="M90 38 Q100 25 110 35" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"/>
  <path d="M110 35 Q100 32 90 38" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <!-- Flor centro -->
  <circle cx="200" cy="28" r="4" fill="currentColor"/>
  <circle cx="200" cy="28" r="9" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M200 19 Q196 14 192 19 Q196 12 200 19" fill="currentColor"/>
  <path d="M200 19 Q204 14 208 19 Q204 12 200 19" fill="currentColor"/>
  <path d="M191 24 Q186 20 191 16 Q186 22 191 24" fill="currentColor"/>
  <path d="M209 24 Q214 20 209 16 Q214 22 209 24" fill="currentColor"/>
  <!-- Hoja derecha -->
  <path d="M290 38 Q300 25 310 35" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"/>
  <path d="M310 35 Q300 32 290 38" stroke="currentColor" stroke-width="0.8" fill="none"/>
  <!-- Flor derecha -->
  <circle cx="330" cy="30" r="3" fill="currentColor"/>
  <circle cx="330" cy="30" r="7" stroke="currentColor" stroke-width="1" fill="none"/>
  <path d="M330 23 Q327 20 324 23 Q327 18 330 23" fill="currentColor"/>
  <path d="M330 23 Q333 20 336 23 Q333 18 330 23" fill="currentColor"/>
</svg>
```

---

### Floral-2: Línea con hojas botánicas
*Ideal para: bodas jardín, XV años naturales, eventos eco-friendly*
*Vocabulario: natural, botánico, fresco*

```svg
<svg viewBox="0 0 500 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <line x1="0" y1="30" x2="150" y2="30" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <line x1="350" y1="30" x2="500" y2="30" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <!-- Hojas izquierda -->
  <path d="M155 30 Q170 10 185 25" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.15"/>
  <path d="M185 25 Q172 22 155 30" stroke="currentColor" stroke-width="0.8"/>
  <path d="M160 30 Q175 50 190 35" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.15"/>
  <path d="M190 35 Q177 38 160 30" stroke="currentColor" stroke-width="0.8"/>
  <!-- Tallo central -->
  <path d="M185 25 L200 20 L215 25" stroke="currentColor" stroke-width="1"/>
  <path d="M190 35 L200 40 L210 35" stroke="currentColor" stroke-width="1"/>
  <line x1="200" y1="15" x2="200" y2="45" stroke="currentColor" stroke-width="1.2"/>
  <!-- Hojas derecha -->
  <path d="M315 30 Q300 10 285 25" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.15"/>
  <path d="M285 25 Q298 22 315 30" stroke="currentColor" stroke-width="0.8"/>
  <path d="M310 30 Q295 50 280 35" stroke="currentColor" stroke-width="1.2" fill="currentColor" fill-opacity="0.15"/>
  <path d="M280 35 Q293 38 310 30" stroke="currentColor" stroke-width="0.8"/>
</svg>
```

---

### Floral-3: Corona / Arco floral
*Ideal para: hero de boda, sección de nombres, XV años*
*Vocabulario: ceremonial, romántico, elaborado*

```svg
<svg viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- Arco principal -->
  <path d="M30 110 Q150 10 270 110" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <!-- Flores en el arco -->
  <circle cx="80" cy="55" r="5" fill="currentColor" fill-opacity="0.8"/>
  <circle cx="80" cy="55" r="10" stroke="currentColor" stroke-width="1" fill="none"/>
  <circle cx="150" cy="20" r="6" fill="currentColor"/>
  <circle cx="150" cy="20" r="12" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <circle cx="220" cy="55" r="5" fill="currentColor" fill-opacity="0.8"/>
  <circle cx="220" cy="55" r="10" stroke="currentColor" stroke-width="1" fill="none"/>
  <!-- Hojas pequeñas -->
  <path d="M100 70 Q115 55 125 65" stroke="currentColor" stroke-width="1" fill="currentColor" fill-opacity="0.2"/>
  <path d="M175 65 Q185 50 200 60" stroke="currentColor" stroke-width="1" fill="currentColor" fill-opacity="0.2"/>
  <path d="M55 85 Q65 70 75 80" stroke="currentColor" stroke-width="1" fill="currentColor" fill-opacity="0.2"/>
  <path d="M225 80 Q235 65 245 75" stroke="currentColor" stroke-width="1" fill="currentColor" fill-opacity="0.2"/>
  <!-- Pequeños puntos florales -->
  <circle cx="115" cy="42" r="2.5" fill="currentColor" fill-opacity="0.6"/>
  <circle cx="185" cy="42" r="2.5" fill="currentColor" fill-opacity="0.6"/>
</svg>
```

---

## GEOMÉTRICOS / ART DECO

### Geo-1: Línea Art Deco clásica
*Ideal para: bodas elegantes, eventos de gala, corporativo de lujo*
*Vocabulario: sofisticado, formal, atemporal*

```svg
<svg viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <line x1="0" y1="15" x2="155" y2="15" stroke="currentColor" stroke-width="0.75"/>
  <line x1="245" y1="15" x2="400" y2="15" stroke="currentColor" stroke-width="0.75"/>
  <!-- Rombo central -->
  <path d="M200 5 L210 15 L200 25 L190 15 Z" stroke="currentColor" stroke-width="1.2" fill="none"/>
  <!-- Líneas decorativas -->
  <line x1="160" y1="15" x2="175" y2="15" stroke="currentColor" stroke-width="2"/>
  <line x1="225" y1="15" x2="240" y2="15" stroke="currentColor" stroke-width="2"/>
  <circle cx="183" cy="15" r="2" fill="currentColor"/>
  <circle cx="217" cy="15" r="2" fill="currentColor"/>
</svg>
```

---

### Geo-2: Doble línea con diamantes
*Ideal para: eventos corporativos, conferencias premium, bodas minimalistas*
*Vocabulario: preciso, moderno, estructurado*

```svg
<svg viewBox="0 0 500 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <line x1="0" y1="14" x2="500" y2="14" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
  <line x1="0" y1="26" x2="500" y2="26" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
  <!-- Diamante izquierdo -->
  <path d="M150 20 L158 14 L166 20 L158 26 Z" fill="currentColor"/>
  <!-- Punto central -->
  <circle cx="250" cy="20" r="4" fill="currentColor"/>
  <circle cx="250" cy="20" r="8" stroke="currentColor" stroke-width="0.75" fill="none"/>
  <!-- Diamante derecho -->
  <path d="M334 20 L342 14 L350 20 L342 26 Z" fill="currentColor"/>
</svg>
```

---

### Geo-3: Marco decorativo de esquinas
*Ideal para: secciones especiales, hero, citas importantes*
*Úsalo como wrapper, no como separador horizontal*
*Vocabulario: vintage, distinguido, enmarcado*

```svg
<!-- Esquina superior izquierda + inferior derecha (repetir con rotate para las otras) -->
<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M5 30 L5 5 L30 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  <path d="M5 5 L20 20" stroke="currentColor" stroke-width="0.75" opacity="0.5"/>
  <circle cx="5" cy="5" r="3" fill="currentColor"/>
</svg>
```

*Implementación en Astro/JSX:*
```jsx
<div class="relative border border-[var(--color-invite-accent)]/20 p-8 md:p-12">
  {/* Esquinas decorativas */}
  <div class="absolute top-2 left-2"><CornerSvg /></div>
  <div class="absolute top-2 right-2 rotate-90"><CornerSvg /></div>
  <div class="absolute bottom-2 left-2 -rotate-90"><CornerSvg /></div>
  <div class="absolute bottom-2 right-2 rotate-180"><CornerSvg /></div>
  {/* Contenido */}
</div>
```

---

## ONDAS / ORGÁNICO

### Wave-1: Onda suave simple
*Ideal para: transición entre secciones de color diferente*
*Vocabulario: fluido, moderno, dinámico*

```svg
<svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 40 C360 0 720 80 1080 40 C1260 20 1380 50 1440 40 L1440 80 L0 80 Z"
    fill="currentColor" fill-opacity="0.08"/>
  <path d="M0 50 C360 10 720 90 1080 50 C1260 30 1380 60 1440 50"
    stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.5"/>
</svg>
```

---

### Wave-2: Doble onda con relleno
*Ideal para: separar secciones con fondo de color*
*Vocabulario: fluido, playful, moderno*

```svg
<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 60 C240 20 480 100 720 60 C960 20 1200 100 1440 60 L1440 120 L0 120 Z"
    fill="currentColor" fill-opacity="0.05"/>
  <path d="M0 80 C240 40 480 120 720 80 C960 40 1200 120 1440 80 L1440 120 L0 120 Z"
    fill="currentColor" fill-opacity="0.1"/>
</svg>
```

*Para usarlo como "tapa" de sección (cambio de fondo):*
```html
<div class="relative">
  <section class="bg-[var(--color-invite-surface)] ...">
    <!-- sección anterior -->
  </section>
  <!-- Onda que "derrama" hacia la siguiente sección -->
  <div class="text-[var(--color-invite-bg)] -mt-1">
    <svg ...>...</svg>
  </div>
  <section class="bg-[var(--color-invite-bg)] ...">
    <!-- sección siguiente -->
  </section>
</div>
```

---

## MINIMALISTAS / LINEALES

### Min-1: Línea con texto intercalado
*Ideal para: separar secciones en invitaciones corporativas y minimalistas*
*Vocabulario: editorial, limpio, moderno*

```html
<!-- Implementación HTML/JSX -->
<div class="flex items-center gap-4 w-full">
  <div class="flex-1 h-px bg-[var(--color-invite-accent)]/30"></div>
  <span class="text-[var(--color-invite-accent)] text-xs tracking-[0.25em] uppercase font-body">
    ✦
  </span>
  <div class="flex-1 h-px bg-[var(--color-invite-accent)]/30"></div>
</div>
```

---

### Min-2: Tres puntos simétricos
*Ideal para: pausas breves, separación de párrafos en invitaciones formales*
*Vocabulario: editorial, tipográfico, minimalista*

```html
<div class="flex justify-center items-center gap-3 py-6">
  <span class="w-1 h-1 rounded-full bg-[var(--color-invite-accent)]/60"></span>
  <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-invite-accent)]"></span>
  <span class="w-1 h-1 rounded-full bg-[var(--color-invite-accent)]/60"></span>
</div>
```

---

### Min-3: Doble línea fina
*Ideal para: secciones de alta formalidad, bodas clásicas, eventos de gala*
*Vocabulario: formal, clásico, impreso*

```html
<div class="flex flex-col items-center gap-1 py-8 w-full">
  <div class="w-48 h-px bg-[var(--color-invite-accent)]"></div>
  <div class="w-36 h-px bg-[var(--color-invite-accent)]/50"></div>
</div>
```

---

## Combinaciones recomendadas por estilo

| Estilo de invitación | Separadores a usar | Evitar |
|---|---|---|
| Boda Elegante | Geo-1, Min-3, Floral-1 | Wave-2, Min-1 |
| Boda Jardín / Bohemia | Floral-2, Wave-1, Min-2 | Geo-2, Geo-3 |
| XV Años Clásico | Floral-3, Geo-3, Min-3 | Wave-2 |
| XV Años Moderno | Wave-1, Min-1, Floral-1 | Floral-3, Geo-3 |
| Corporativo Formal | Geo-1, Geo-2, Min-3 | Floral-3, Wave-2 |
| Corporativo Creativo | Min-1, Wave-1, Geo-2 | Floral-3, Geo-3 |
| Lanzamiento / Tech | Min-1, Min-2, Wave-1 | Floral-*, Geo-3 |
