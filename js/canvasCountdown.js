function startCountdown() {
    document.getElementById('movieCountdown').style.display = 'block';
    document.getElementById('play-video').style.display = 'none';
    var canvas;
    var context;
    var sound = document.querySelector("#movieCountdown");
    
    canvas = document.getElementById('countDown');
    context = canvas.getContext('2d');
    context.font = "150px Arial";
    context.textAlign = "center";

    function draw(count) {
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
                document.getElementById('movieCountdown').style.display = 'block';
                document.getElementById('play-video').style.display = 'none';
                playVideo();
            }
        }, 1000);
    }
    countDown();
}