let element = null;
let result = "";
if (document.getElementById("audioList")) {
    let audios = media.multimedia.filter((m) => {
        return m.type === "audio"
    })
    element = document.getElementById("audioList");
    
    for (let i = 0; i < audios.length; i++) {
        result += `
        <div class="left" id="${audios[i].id}">
        <a href="audioDetails.html?id=${audios[i].id}"><img class="thumbnails" src="multimedia/img/${audios[i].image}"
                alt="audio thumbnail"></a><br>
        <a href="audioDetails.html?id=${audios[i].id}">${audios[i].text}</a><br>
        <small><span style="color:grey">${audios[i].num_rep} Reproducciones</span> Hace 14 dias</small>
        <a style="padding: 10px 30px; cursor: pointer;" class="playlistButtonAudio"></a>
    </div>
        `
    }
}
else if (document.getElementById("videoList")) {
    let videos = media.multimedia.filter((m) => {
        return m.type === "video"
    })
    element = document.getElementById("videoList");
    
    for (let i = 0; i < videos.length; i++) {
        result += `
        <div class="left" id="${videos[i].id}">
            <a href="videoDetails.html?id=${videos[i].id}"><img class="thumbnails" src="multimedia/img/${videos[i].image}"
            alt="video thumbnail"></a><br>
            <a href="videoDetails.html?id=${videos[i].id}">${videos[i].text}</a><br>
            <small><span style="color:grey">${videos[i].num_rep} Reproducciones</span> Hace 14 dias</small>
            <a style="padding: 10px 30px; cursor: pointer;" class="playlistButtonVideo"></a>
        </div>
        `
    }
}
else {
    element = document.getElementById("multimediaList");
    media.multimedia.forEach(m => {
        if (m.type == "video") {
            result += `
            <div class="left" id="${m.id}">
            <a href="videoDetails.html?id=${m.id}"><img class="thumbnails" src="multimedia/img/${m.image}"
            alt="video thumbnail"></a><br>
            <a href="videoDetails.html?id=${m.id}">${m.text}</a><br>
            <small><span style="color:grey">${m.num_rep} Reproducciones</span> Hace 14 dias</small>
            <a style="padding: 10px 30px; cursor: pointer;" class="playlistButtonVideo"></a>
        </div>
        `
        }
        else {
            result += `
            <div class="left" id="${m.id}">
        <a href="audioDetails.html?id=${m.id}"><img class="thumbnails" src="multimedia/img/${m.image}"
                alt="audio thumbnail"></a><br>
        <a href="audioDetails.html?id=${m.id}">${m.text}</a><br>
        <small><span style="color:grey">${m.num_rep} Reproducciones</span> Hace 14 dias</small>
        <a style="padding: 10px 30px; cursor: pointer;" class="playlistButtonAudio"></a>
    </div>
        `
        }
    });
}
element.insertAdjacentHTML('beforeend', result);