//let number = 1
theAudio = document.querySelector("#play-audio");

    function playAudio() {
       theAudio.play();
    }
    
    function pauseAudio() {
       theAudio.pause();
    }

    function stopAudio() {
       theAudio.currentTime = 0;
       theAudio.pause();
    }
    
    function rewindAudio() {
       theAudio.currentTime = 0;
    }

    function avanceSeconds() {
        theAudio.currentTime = theAudio.currentTime + 10;
    }

    function rewindSeconds() {
        theAudio.currentTime = theAudio.currentTime - 10;
    }