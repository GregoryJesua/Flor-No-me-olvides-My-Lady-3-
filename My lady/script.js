// Texto al hacer clic en la flor
const flowerText = document.getElementById("flower-text");
const flower = document.getElementById("flower");

flower.addEventListener("click", () => {
    flowerText.textContent = "Que eres lo mas maravilloso de este universo y de cualquier otro, tu amor es lo mas precioso que puedo tener y tu compañia hace que mi vida brille sin igual, me hace tan feliz compartir mi vida contigo eres mi luz de cada mañana y por la que doy mi 100 todos los dias, quiero darte las gracias por ser tanto en mi vida y estar siempre para mi, por ser ese Quasar de emociones y que me inspira siempre a seguir...Estoy orgulloso de ti My lady de todo lo que haces...de todo lo que eres y de lo que vamos a construir juntos y Nunca olvides lo infinitamente que Te amo Feliz Navidad mi niña hermosa <3";
    flowerText.style.color = "#5a5aad";

    for (let i = 0; i < 15; i++) {
        createFallingFlower();
    }
});

// Función para crear flores cayendo
function createFallingFlower() {
    const fallingFlower = document.createElement("div");
    fallingFlower.classList.add("falling-flower");

    fallingFlower.style.left = Math.random() * 100 + "vw";
    fallingFlower.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(fallingFlower);

    setTimeout(() => {
        fallingFlower.remove();
    }, 5000);
}

// Botón para mostrar la imagen
const showImageButton = document.getElementById("show-image-button");
const imageContainer = document.getElementById("image-container");

showImageButton.addEventListener("click", () => {
    imageContainer.style.display = "block";
});

// Burbuja flotante
function createBubbles() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.width = Math.random() * 30 + 10 + "px";
    bubble.style.height = bubble.style.width;

    document.body.appendChild(bubble);

    setTimeout(() => bubble.remove(), 10000);
}

setInterval(createBubbles, 300);
function createBubbles() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Posición aleatoria
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.width = Math.random() * 30 + 10 + "px";
    bubble.style.height = bubble.style.width;

    // Agregar burbuja al cuerpo
    document.body.appendChild(bubble);

    // Eliminar la burbuja después de 10s
    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

// Crear burbujas constantemente
setInterval(createBubbles, 300);
// Selecciona el botón y el audio
const playButton = document.getElementById("play-music-button");
const backgroundMusic = document.getElementById("background-music");

