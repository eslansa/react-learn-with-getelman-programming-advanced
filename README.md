Guía: Aprendiendo React con Bun y Vite

¿Qué es un Bundle?
Un bundle es el build o compilado de tu aplicación. Este archivo empaquetado contiene todo el código necesario para que la aplicación funcione en el navegador.

Características principales de un bundle:
Minificación del código: Reduce el tamaño del archivo eliminando espacios, comentarios y caracteres innecesarios para optimizar el rendimiento.
Ofuscación del código: Hace que el código sea difícil de leer, ayudando a proteger la lógica de la aplicación.
Tree Shaking (sacudida de árbol): Elimina el código o dependencias que no se están utilizando, reduciendo el peso del archivo final.
Ventajas del bundle:
Carga optimizada: El navegador solo carga los archivos necesarios (públicos).
Seguridad: Los archivos privados que no están en memoria no son accesibles, añadiendo una capa de protección.

¿Qué es ECMAScript?
ECMAScript es un estándar que define cómo debe funcionar el lenguaje JavaScript. Es un conjunto de reglas y especificaciones que los navegadores implementan para asegurar que el código JavaScript sea consistente y compatible entre diferentes plataformas.

¿Qué es Vite?
Vite es una herramienta de desarrollo rápido para aplicaciones web modernas. Es conocida por:

Utilizar Rollup como bundle en su configuración de producción.
Proporcionar un servidor de desarrollo increíblemente rápido utilizando módulos ES (ES Modules).
Hacer un build eficiente y optimizado para producción.
Resolver automáticamente dependencias y ofrecer recarga en caliente (Hot Module Replacement, HMR).

¿Qué es Bun?
Bun es un nuevo runtime para JavaScript, TypeScript y JSX que también incluye herramientas integradas como:
Un bundler para empaquetar código rápidamente.
Un gestor de paquetes alternativo a npm/yarn/pnpm.
Un runtime que es significativamente más rápido que Node.js gracias al motor JavaScriptCore (usado en Safari).
Bun es ideal para optimizar aplicaciones modernas debido a su velocidad y enfoque minimalista.

¿Qué es una Single Page Application (SPA)?
Una Single Page Application (SPA) es un tipo de aplicación web donde todo el contenido se carga en una sola página.
En lugar de cargar una nueva página para cada acción del usuario, las SPA actualizan dinámicamente la página actual mediante JavaScript.
Esto proporciona una experiencia más rápida y fluida, similar a las aplicaciones móviles nativas.
React es un framework ideal para desarrollar SPA debido a su enfoque basado en componentes y su sistema de estado eficiente.

Q es un trigger?
evento -> render
Ejemplo: un boton, un estado, una llamada a una api

Hay 2 tipos de trigger
-Inicial: el componente se monta, se renderiza
-Re_Render: renderizo una vez, hago un cambio renderizo otra vez. 

React trabaj directamente con el Dom y el Dom virtual.

Dom: Lo q ya esta montado
Dom Virtual: una copia del doom pero con los cambios, los va a comparar y va a ver q fue lo q cambio.

Que es un componente en React: (un render es ejecutar una funcion)
es una funcion
function Dashboard (){
  return (....)
}

Siempre hay q tener el minimo de renders posibles.

Que es un commit en React?
El proceso de comparacion entre el dom y el dom virtual, y aplicar el cambio en el dom real ese es un commit en React

Ejemplos
Triger -> Pedido
render -> Plato para comer
commit -> Entregar el plato

Un componente debe ser la minima cantidad de logica posible