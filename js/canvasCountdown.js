const canvas = document.getElementById('countDown');
const context = canvas.getContext('2d');
const sound = document.querySelector("#movieCountdown");
var canvasPlaying = false;
/**
 * Pinta el contenido del canvas
 * 
 * @param {int} count Segundos restantes
 * @param {int} countInterval Ángulo en el que estará la linea en una circunferencia de 180º
 */
function draw(count = 5, countInterval = -45) {
    context.beginPath();
    context.font = "150px Arial";
    context.textAlign = "center";
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height); //Dibuja el fondo
    context.fillStyle = "#ccc";
    context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, 2 * Math.PI); //Dibuja la circunferencia
    context.fill();
    context.fillStyle = "grey";
    context.translate(canvas.width / 2, canvas.height / 2); //Mueve el punto de rotación al centro del canvas
    context.rotate(countInterval * Math.PI / 90); //Rota lo próximo que se vaya a dibujar en el canvas los ángulos especificados
    context.translate(-canvas.width / 2, -canvas.height / 2); //Mueve el punto de rotación al punto de inicio
    context.fillRect(canvas.width / 2, canvas.height / 2, canvas.height / 2, 10); //Dibuja la linea rotada
    context.translate(canvas.width / 2, canvas.height / 2); //Mueve el punto de rotación al centro del canvas
    context.rotate(-countInterval * Math.PI / 90); //Devuelve la rotación al estado inicial
    context.translate(-canvas.width / 2, -canvas.height / 2); //Mueve el punto de rotación al estado inicial
    context.fillStyle = "white";
    context.fillText(count, canvas.width / 2, canvas.height / 2 + 50); //Dibuja el número de la cuenta atrás
}

function clearCanvas() {
    canvas.width = canvas.width; //Vacía el contenido del canvas
}

function hide() { //Muestra la cuenta atrás y esconde el vídeo
    document.getElementById('movieCountdown').hidden = false;
    canvas.hidden = false;
    document.getElementById('play-video').hidden = true;
}

function show() { //Muestra el vídeo y esconde la cuenta atrás
    document.getElementById('movieCountdown').hidden = true;
    canvas.hidden = true;
    document.getElementById('play-video').hidden = false;
}

hide(); //Para que muestre el canvas antes de pulsar a inciar el vídeo
draw();

function startCountdown() {
    if (!canvasPlaying) { //Comprueba que la cuenta atrás no esté ocurriendo para que no se puedan entrelazar las cuentas atrás
        canvasPlaying = true;
        hide();
        var count = 5; //La cuenta atrás empieza desde 5
        var countInterval = -45; //El ángulo de inicio hacia arriba en una circunferencia de 180º en el que el 0 está la derecha es -45º
        function countDown() { //Se ejecuta cada vez que se quiere avanzar un grado para dar la vuelta a la circunferencia
            clearCanvas(); //Limpia el canvas
            draw(count, countInterval); //Dibuja el canvas
            setTimeout(function () {
                if (countInterval == 135) { //En este valor ya se ha dado una vuelta completa
                    countInterval = -45; //Resetea los grados
                    count--; //Baja el contador 1 segundo
                    draw(count, countInterval); //Dibuja el canvas con el nuevo número
                    sound.play(); //Suena pitido de cuenta atrás de película
                    if (count > 0) {
                        countDown(); //Siempre que el contador sea mayor de 0 continua la ejecución
                    } else { //Si el contador no es mayor de 0, se acaba la animación y empieza el vídeo
                        show();
                        canvasPlaying = false;
                        playVideo();
                    }
                } else {
                    countInterval++; //Aumenta el contador de grados
                    countDown(); //Ejecuta la función otra vez, este es un algoritmo recursivo ya que se llama a él mismo desde dentro
                }
            }, 1); //Se espera un milisegundo, 
        }
        countDown();
    }
}