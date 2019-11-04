const canvas = document.getElementById('countDown');
const context = canvas.getContext('2d');
const sound = document.querySelector("#movieCountdown");
hide();
draw();

function draw(count = 5) {
    context.beginPath();
    context.font = "150px Arial";
    context.textAlign = "center";
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    context.fillText(count, canvas.width/2, canvas.height/2);
}

function clearCanvas () {
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
    document.getElementById('play-video').hidden= false;
}

function startCountdown() {
    hide();
    
    var count = 5;
    function countDown() {
        clearCanvas();
        draw(count);
        sound.play();
        setTimeout(function() {
            if (count > 0) {
                count--;
                countDown();
            } else {
                show();
                playVideo();
            }
        }, 1000);
    }
    countDown();
}