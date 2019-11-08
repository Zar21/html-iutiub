const canvas = document.getElementById('countDown');
const context = canvas.getContext('2d');
const sound = document.querySelector("#movieCountdown");
var canvasPlaying = false;

function draw(count = 5, countInterval = -45) {
    context.beginPath();
    context.font = "150px Arial";
    context.textAlign = "center";
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#ccc";
    context.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, 0, 2 * Math.PI);
    context.fill();
    context.fillStyle = "grey";
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(countInterval * Math.PI / 90);
    context.translate(-canvas.width / 2, -canvas.height / 2);
    context.fillRect(canvas.width / 2, canvas.height / 2, canvas.height / 2, 10);
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(-countInterval * Math.PI / 90);
    context.translate(-canvas.width / 2, -canvas.height / 2);
    context.fillStyle = "white";
    context.fillText(count, canvas.width / 2, canvas.height / 2 + 50);
}

function clearCanvas() {
    canvas.width = canvas.width;
}

function hide() {
    document.getElementById('movieCountdown').hidden = false;
    canvas.hidden = false;
    document.getElementById('play-video').hidden = true;
}

function show() {
    document.getElementById('movieCountdown').hidden = true;
    canvas.hidden = true;
    document.getElementById('play-video').hidden = false;
}

hide();
draw();

function startCountdown() {
    if (!canvasPlaying) {
        canvasPlaying = true;
        hide();
        var count = 5;
        var countInterval = -45;
        function countDown() {
            clearCanvas();
            draw(count, countInterval);
            setTimeout(function () {
                if (countInterval == 135) {
                    countInterval = -45;
                    count--;
                    draw(count, countInterval);
                    sound.play();
                    if (count > 0) {
                        countDown();
                    } else {
                        show();
                        canvasPlaying = false;
                        playVideo();
                    }
                } else {
                    countInterval++;
                    countDown();
                }
            }, 1);
        }
        countDown();
    }
}