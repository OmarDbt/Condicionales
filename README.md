# Condicionales

Este es un proyecto para aprender a usar condicionales.
Adicionalmente hemos aprendido el CDN de p5.js incluyendo el siguente código dentro del `<head>` del archivo index.hmtl de la siguiente manera:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.11.0/lib/p5.min.js"></script>
```

Para comenzar con el código y usar las condicionales primero, debemos comenzar con los parametros de velocidad, posición, detalles como cambio de color, gravedad, etc.
para eso debemos comenzar antes con `let` en el archivo sketch.js de la siguente manera:

```js
let posX, posY; // posición del objeto
let velX; // velocidad horizontal
let velY; // velocidad vertical
let ballcolor; // variable de color
```

A continuación se prosigue con el resto de código: `funtion setup()` y `funtion draw()`
