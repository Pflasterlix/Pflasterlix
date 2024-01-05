const canvas = document.createElement('canvas');
canvas.width = 200; // Breite des Canvas
canvas.height = 200; // Höhe des Canvas

const ctx = canvas.getContext('2d');
const snakeSize = 10;
const snakeColor = '#00F';

let snake = [{ x: 50, y: 50 }];

function drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.forEach(segment => {
        ctx.fillStyle = snakeColor;
        ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
    });
}

function animateSnake() {
    // Hier implementieren Sie die Logik für die Schlange-Bewegung
    // Zum Beispiel: Bewegung nach rechts
    snake[0].x += 1;

    // Rufen Sie die Zeichenfunktion auf
    drawSnake();

    // Diese Funktion in regelmäßigen Abständen aufrufen, um die Animation aufrechtzuerhalten
    requestAnimationFrame(animateSnake);
}

// Starten Sie die Animation
animateSnake();

// Hier können Sie die generierte Snake-Animation als Bild speichern
const image = canvas.toDataURL('image/png');
const link = document.createElement('a');
link.href = image;
link.download = 'generated-snake.png';
link.click();
