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

    function nextAudio() {      
        let source = document.getElementById('audiosource');
        number++
        if (number > 3) number = 1;
        source.src = "audio_clip"+ number +".mp3";
        theAudio.load();
        theAudio.play();
    }

    function previousAudio() {
        let source = document.getElementById('audiosource');
        number--
        if (number == 0) number = 3;
        source.src = "audio_clip"+ number +".mp3";
        theAudio.load();
        theAudio.play();
    }