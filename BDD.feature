# language: es
Característica: Rediseño inmersivo 3D de GrowIt.dev
  Como visitante del sitio de Grow IT
  Quiero una experiencia visual inmersiva con animaciones 3D y buena legibilidad
  Para entender rápidamente qué ofrece la empresa y sentir confianza en su expertise tecnológico

  # ─── PASO 1: LEGIBILIDAD ───

  Escenario: Contraste de texto cumple WCAG AA
    Dado que el sitio carga en modo oscuro
    Cuando observo cualquier texto sobre el fondo
    Entonces el ratio de contraste es al menos 4.5:1 para texto normal
    Y al menos 3:1 para texto grande (≥18px bold o ≥24px)

  Escenario: Texto secundario es legible
    Dado que estoy en cualquier sección del sitio
    Cuando leo párrafos descriptivos
    Entonces el color del texto secundario tiene un contraste mínimo de 4.5:1 contra el fondo
    Y el line-height es al menos 1.7

  Escenario: Hero subtitle es claramente legible
    Dado que estoy en la sección hero
    Cuando leo el subtítulo
    Entonces el font-size es al menos 18px
    Y el color tiene contraste suficiente contra el fondo y el canvas 3D

  # ─── PASO 2: GSAP SCROLLTRIGGER ───

  Escenario: Elementos se animan al entrar al viewport
    Dado que hago scroll hacia una sección
    Cuando la sección entra al viewport
    Entonces los elementos se animan con GSAP ScrollTrigger
    Y la animación tiene stagger entre elementos hermanos

  Escenario: Stats counters se activan con scroll
    Dado que la sección de estadísticas no es visible
    Cuando hago scroll hasta que la sección entra al viewport
    Entonces los contadores se animan de 0 al valor final
    Y la animación dura entre 1.5 y 2.5 segundos

  # ─── PASO 3: HERO INMERSIVO ───

  Escenario: Título hero se anima por palabra
    Dado que el sitio termina de cargar
    Cuando se muestra la sección hero
    Entonces cada palabra del título aparece con animación secuencial
    Y la animación total dura menos de 2 segundos

  Escenario: Partículas 3D hacen zoom-in al cargar
    Dado que el sitio carga por primera vez
    Cuando se renderiza el canvas 3D
    Entonces las partículas convergen desde posiciones dispersas hacia la red neuronal
    Y la cámara hace zoom-in suave durante la intro

  # ─── PASO 4: 3D SCROLL-DRIVEN ───

  Escenario: Red neuronal reacciona al scroll
    Dado que estoy viendo el sitio en desktop
    Cuando hago scroll entre secciones
    Entonces la red de partículas 3D cambia de forma según la sección visible
    Y las transiciones entre formas son suaves (duración > 0.5s)

  Escenario: Mouse parallax en el hero
    Dado que estoy en la sección hero en desktop
    Cuando muevo el mouse
    Entonces la red 3D rota sutilmente siguiendo la posición del cursor
    Y el efecto es más pronunciado que en otras secciones

  Escenario: 3D reducido en mobile
    Dado que accedo desde un dispositivo móvil (viewport < 768px)
    Cuando el sitio carga
    Entonces el número de partículas es menor a 400
    Y las animaciones 3D scroll-driven se simplifican o desactivan

  # ─── PASO 5: SECCIONES CON PROFUNDIDAD ───

  Escenario: Cards de servicios tienen hover 3D
    Dado que estoy en la sección de servicios en desktop
    Cuando paso el mouse sobre una card
    Entonces la card rota sutilmente en 3D siguiendo la posición del cursor
    Y muestra un efecto de brillo en el borde

  Escenario: Timeline de proceso es horizontal con scroll
    Dado que llego a la sección de proceso
    Cuando hago scroll vertical
    Entonces la sección se fija (pin) y el contenido se desplaza horizontalmente
    Y al completar el recorrido horizontal, el scroll vertical continúa

  Escenario: Stats entran con parallax
    Dado que hago scroll hacia la sección de estadísticas
    Cuando los números entran al viewport
    Entonces cada stat se mueve a velocidad ligeramente diferente (parallax)
    Y los contadores se animan simultáneamente

  # ─── PASO 6: TRANSICIONES ENTRE SECCIONES ───

  Escenario: Transiciones con clip-path entre secciones
    Dado que hago scroll entre dos secciones
    Cuando una sección sale y otra entra
    Entonces hay una transición visual con clip-path animado
    Y la transición dura entre 0.4 y 1 segundo

  Escenario: Glow blobs se mueven con el scroll
    Dado que hay blobs de luz ambiental en el fondo
    Cuando hago scroll
    Entonces los blobs se desplazan con parallax respecto al contenido
    Y su opacidad varía según la sección visible

  # ─── PASO 7: MICRO-INTERACCIONES ───

  Escenario: Botones tienen efecto magnético
    Dado que estoy en desktop
    Cuando acerco el cursor a un botón primario o CTA
    Entonces el botón se desplaza sutilmente hacia el cursor
    Y vuelve a su posición al alejar el mouse

  Escenario: Nav links tienen underline animado
    Dado que estoy viendo el navbar
    Cuando paso el mouse sobre un link de navegación
    Entonces aparece un underline animado de izquierda a derecha
    Y desaparece al salir el mouse

  Escenario: Cards muestran borde con gradiente al hover
    Dado que paso el mouse sobre cualquier card (servicio, beneficio)
    Cuando el hover está activo
    Entonces el borde de la card muestra un gradiente animado
    Y el efecto se desvanece suavemente al salir

  # ─── PASO 8: PERFORMANCE ───

  Escenario: Carga inicial rápida
    Dado que un usuario accede al sitio por primera vez
    Cuando la página carga completamente
    Entonces el LCP (Largest Contentful Paint) es menor a 2.5 segundos
    Y el CLS (Cumulative Layout Shift) es menor a 0.1

  Escenario: Animaciones fluidas
    Dado que el sitio está cargado en desktop
    Cuando hago scroll con animaciones 3D activas
    Entonces el framerate se mantiene por encima de 50 FPS
    Y no hay jank visible durante las transiciones

  Escenario: Funcionalidad sin JavaScript
    Dado que JavaScript está deshabilitado
    Cuando accedo al sitio
    Entonces todo el contenido textual es visible y legible
    Y la navegación funciona con anchor links
