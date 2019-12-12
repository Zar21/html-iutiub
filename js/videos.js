let buttonsVideos = document.querySelectorAll('.playlistButtonVideo');
buttonsVideos.forEach(element => {
    let videos = JSON.parse(localStorage.getItem('videos'));
    if (!videos) {
        videos = [];
    }
    if (videos.indexOf(element.parentElement.id) != -1) {
        removeVideoListener(element);
    } else {
        addVideoListener(element);
    }
});

function addVideo() {
    let videos = JSON.parse(localStorage.getItem('videos'));
    if (!videos) {
        videos = [];
    }
    if (videos.indexOf(this.parentElement.id) == -1) {
        videos.push(this.parentElement.id);
        removeVideoListener(this);
        localStorage.setItem('videos',JSON.stringify(videos));
    }
}

function removeVideo() {
    let videos = JSON.parse(localStorage.getItem('videos'));
    if (!videos) {
        videos = [];
    }
    if (videos.indexOf(this.parentElement.id) != -1) {
        videos.splice(videos.indexOf(this.parentElement.id),1);
        addVideoListener(this);
        localStorage.setItem('videos',JSON.stringify(videos));
    }
}

function addVideoListener(elem) {
    elem.removeEventListener('click',removeVideo);
    elem.addEventListener('click', addVideo);
    elem.innerHTML = '+';
    elem.style.background = 'rgba(0,255,0,0.3)';
    elem.style.padding = '10px 30px';
}

function removeVideoListener(elem) {
    elem.removeEventListener('click',addVideo);
    elem.addEventListener('click', removeVideo);
    elem.innerHTML = '-';
    elem.style.background = 'rgba(255,0,0,0.3)';
    elem.style.padding = '10px 32px';
}