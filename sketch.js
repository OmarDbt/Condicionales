let posX, posY;      // Posición inicial del círculo
let velX = 5;        // Velocidad horizontal
let velY = 3;        // Velocidad vertical
let ballColor;       // Variable para el color del círculo

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = width / 2;   // Inicia el círculo en el centro
  posY = height / 2;
  ballColor = color(127);  // Color inicial de la pelota
}

function draw() {
  background(50);

  // Actualiza la posición
  posX += velX;
  posY += velY;

  // Comprueba los bordes y rebota
  if (posX + 25 > width || posX - 25 < 0) {
    velX *= -1;          // Invertir la dirección
    changeColor();       // Cambia el color al rebotar
  }
  if (posY + 25 > height || posY - 25 < 0) {
    velY *= -1;          // Invertir la dirección
    changeColor();       // Cambia el color al rebotar
  }

  // Dibujar el círculo con el color actual
  fill(ballColor);
  noStroke();
  ellipse(posX, posY, 100, 100);
}

// Función para cambiar el color del círculo a uno aleatorio
function changeColor() {
  ballColor = color(random(255), random(255), random(255));  // Color aleatorio RGB
}
