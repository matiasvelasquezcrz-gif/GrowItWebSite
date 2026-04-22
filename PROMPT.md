# PROMPT — Rediseño Inmersivo 3D de GrowIt.dev

## Visión
Transformar GrowIt.dev de un sitio con layout plano y fondo 3D decorativo a una **experiencia inmersiva scroll-driven** donde el 3D, la tipografía y las animaciones cuentan la historia de la marca. Inspirado en sitios generados con Framer, v0 y herramientas de diseño AI de nueva generación.

## Estado Actual
- Single-page HTML (4312 líneas, todo inline)
- Three.js r128: red neuronal de partículas (fondo decorativo, no interactivo)
- Glassmorphism + reveal animations básicas (translateY)
- Fondo `#03040d` — demasiado oscuro, texto secundario poco legible
- Layout lineal clásico: hero → stats → about → services → process → benefits → tech → contact

## Problemas a Resolver
1. **Legibilidad** — Contraste insuficiente, especialmente texto secundario (`#6b7599` sobre `#03040d`)
2. **3D decorativo** — Las partículas no interactúan con el contenido ni responden al scroll
3. **Animaciones planas** — Solo fade-in con translateY, sin scroll-driven transforms
4. **Layout monótono** — Secciones rectangulares en secuencia, nada rompe la cuadrícula
5. **Mantenibilidad** — Todo en un solo archivo

## Stack Técnico

| Tecnología | Uso |
|---|---|
| Three.js r128 (ya incluido) | Escena 3D principal, partículas, geometrías |
| GSAP + ScrollTrigger (agregar) | Animaciones scroll-driven, timelines, pinning |
| CSS moderno | clip-path, container queries, custom properties |
| HTML semántico | Estructura accesible |

> No se agrega framework (React/Vue). Se mantiene vanilla para simplicidad y performance.

## Plan de Implementación — Paso a Paso

### Paso 1: Legibilidad y Sistema de Color
- Subir fondo base de `#03040d` a `#0a0e1a` (más azulado, menos negro puro)
- Texto secundario de `#6b7599` a `#94a3b8` (ratio WCAG AA mínimo 4.5:1)
- Aumentar `line-height` de párrafos a 1.75
- Hero subtitle: font-size mínimo 18px, color más claro
- Agregar `text-shadow` sutil en headings para separar del fondo

### Paso 2: Integrar GSAP ScrollTrigger
- Agregar CDN de GSAP + ScrollTrigger
- Reemplazar el sistema de reveal CSS por ScrollTrigger
- Cada sección se anima al entrar al viewport con stagger
- Stats counters se disparan con ScrollTrigger (no IntersectionObserver manual)

### Paso 3: Hero Inmersivo
- Título hero con animación de entrada por palabra (split text)
- Subtitle con typewriter o fade-in por línea
- El 3D de partículas hace zoom-in dramático al cargar (ya tiene algo, mejorarlo)
- Scroll indicator animado con bounce

### Paso 4: 3D Scroll-Driven
- La red neuronal reacciona al scroll: se comprime, expande, rota según la sección visible
- Al llegar a "Servicios": partículas se reorganizan en forma de grid/hexágono
- Al llegar a "Proceso": partículas forman una línea/flujo
- Al llegar a "Contacto": partículas se dispersan suavemente
- Mouse parallax más pronunciado en el hero, sutil en el resto

### Paso 5: Secciones con Profundidad
- Servicios: cards con hover 3D (rotateX/Y según posición del mouse)
- Proceso: timeline horizontal con scroll horizontal (pin section + scrub)
- Stats: números que crecen con parallax vertical
- Beneficios: cards que entran con stagger desde diferentes direcciones

### Paso 6: Transiciones entre Secciones
- Clip-path transitions entre secciones (circle reveal, diagonal wipe)
- Parallax por capas: elementos de fondo se mueven más lento que el contenido
- Ambient glow blobs que se mueven con el scroll

### Paso 7: Micro-interacciones
- Botones con efecto magnético mejorado (ya tiene clase, falta JS)
- Cursor custom que cambia al hover sobre elementos interactivos
- Links del nav con underline animado
- Cards con borde que brilla al hover (gradient border animation)

### Paso 8: Performance y Estructura
- Separar CSS, JS y HTML en archivos independientes
- Lazy-load de Three.js (defer)
- Reducir partículas en mobile de 500 a 300
- `will-change` solo en elementos que se animan
- Throttle en eventos de scroll y mousemove

## Principios de Diseño
- **Legibilidad primero** — Si no se puede leer, no importa qué tan bonito sea
- **3D como storytelling** — El 3D debe reforzar el mensaje, no distraer
- **Progressive enhancement** — Funciona sin JS, se enriquece con él
- **Mobile-first** — Animaciones reducidas en mobile, experiencia completa en desktop
- **Performance budget** — LCP < 2.5s, FPS > 50 durante animaciones
