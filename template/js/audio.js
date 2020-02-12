theAudio = document.querySelector("#play-audio");

    function playAudio() { //activa el audio
       theAudio.play();
    }
    
    function pauseAudio() { //pausa el audio
       theAudio.pause();
    }

    function stopAudio() { //detiene el audio y lo pone a 0
       theAudio.currentTime = 0;
       theAudio.pause();
    }
    
    function rewindAudio() { //el audio vuelve a empezar
       theAudio.currentTime = 0;
    }

    function avanceSeconds() { //avanza 10 segundos
        theAudio.currentTime = theAudio.currentTime + 10;
    }

    function rewindSeconds() { //retrocede 10 segundos
        theAudio.currentTime = theAudio.currentTime - 10;
    }