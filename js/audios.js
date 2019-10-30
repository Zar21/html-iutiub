let buttonsAudios = document.querySelectorAll('#playlistButtonAudio');
buttonsAudios.forEach(element => {    
    let audios = JSON.parse(localStorage.getItem('audios'));
    if (!audios) {
        audios = [];
    }
    if (audios.indexOf(element.parentElement.id) != -1) {
        removeAudioListener(element);
    } else {
        addAudioListener(element);
    }
});

function addAudio() {
    let audios = JSON.parse(localStorage.getItem('audios'));
    if (!audios) {
        audios = [];
    }
    if (audios.indexOf(this.parentElement.id) == -1) {
        audios.push(this.parentElement.id);
        removeAudioListener(this);
        localStorage.setItem('audios',JSON.stringify(audios));
    }
}

function removeAudio() {
    let audios = JSON.parse(localStorage.getItem('audios'));
    if (!audios) {
        audios = [];
    }
    if (audios.indexOf(this.parentElement.id) != -1) {
        audios.splice(audios.indexOf(this.parentElement.id),1);
        addAudioListener(this);
        localStorage.setItem('audios',JSON.stringify(audios));
    }
}

function addAudioListener(elem) {
    elem.removeEventListener('click',removeAudio);
    elem.addEventListener('click', addAudio);
    elem.innerHTML = '+';
    elem.style.background = 'rgba(0,255,0,0.3)';
}

function removeAudioListener(elem) {
    elem.removeEventListener('click',addAudio);
    elem.addEventListener('click', removeAudio);
    elem.innerHTML = '-';
    elem.style.background = 'rgba(255,0,0,0.3)';
}