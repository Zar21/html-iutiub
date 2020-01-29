let element = null; //Variable donde se guardara el div donde introduciremos el multimedia dependiendo de el id que este especificado en la pagina
let result = ""; //Variable donde se guardara el html que se incluira en el div
if (document.getElementById("audioList")) { //Comprobamos si existe el id audioList
    let audios = media.multimedia.filter((m) => { //Filtramos los audios de el json de multimedia
        return m.type === "audio"
    })
    element = document.getElementById("audioList"); //Metemos en element el elemento audioList
    
    for (let i = 0; i < audios.length; i++) { //Iteramos cada audio para generar un html donde se mostrara su información
        result += `
        <div class="left" id="${audios[i].id}">
        <a href="audioDetails.html"><img class="thumbnails" src="multimedia/img/${audios[i].image}"
                alt="audio thumbnail"></a><br>
        <a href="audioDetails.html">${audios[i].text}</a><br>
        <small><span style="color:grey">${audios[i].num_rep} Reproducciones</span> Hace 14 dias</small>
        <a style="padding: 10px 30px; cursor: pointer;" class="playlistButtonAudio"></a>
    </div>
        `
    }
}
else if (document.getElementById("videoList")) { //En caso de no existir audioList busca por videoList
    let videos = media.multimedia.filter((m) => { //Filtramos los videos de el json de multimedia
        return m.type === "video"
    })
    element = document.getElementById("videoList"); //Metemos en element el elemento videoList
    
    for (let i = 0; i < videos.length; i++) { //Iteramos cada video para generar un html donde se mostrara su información
        result += `
        <div class="left" id="${videos[i].id}">
            <a href="videoDetails.html"><img class="thumbnails" src="multimedia/img/${videos[i].image}"
            alt="video thumbnail"></a><br>
            <a href="videoDetails.html">${videos[i].text}</a><br>
            <small><span style="color:grey">${videos[i].num_rep} Reproducciones</span> Hace 14 dias</small>
            <a style="padding: 10px 30px; cursor: pointer;" class="playlistButtonVideo"></a>
        </div>
        `
    }
}
else if (document.getElementById("multimediaList")) { //Finalmente si no existe ni audio list ni video list busca por multimediaList que seria una mezcla de los 2 (audios y videos)
    element = document.getElementById("multimediaList");  //Metemos en element el elemento multimediaList
    media.multimedia.forEach(m => { //realizamos un foreach a media directamente ya que en este caso no es necesario filtrar ningún elemento
        if (m.type == "video") { //En el caso de que el item sea un video se generara un html especifico
            result += `
            <div class="left" id="${m.id}">
            <a href="videoDetails.html"><img class="thumbnails" src="multimedia/img/${m.image}"
            alt="video thumbnail"></a><br>
            <a href="videoDetails.html">${m.text}</a><br>
            <small><span style="color:grey">${m.num_rep} Reproducciones</span> Hace 14 dias</small>
            <a style="padding: 10px 30px; cursor: pointer;" class="playlistButtonVideo"></a>
        </div>
        `
        }
        else { //En el caso de que el item sea un audio se generara un html especifico
            result += `
            <div class="left" id="${m.id}">
        <a href="audioDetails.html"><img class="thumbnails" src="multimedia/img/${m.image}"
                alt="audio thumbnail"></a><br>
        <a href="audioDetails.html">${m.text}</a><br>
        <small><span style="color:grey">${m.num_rep} Reproducciones</span> Hace 14 dias</small>
        <a style="padding: 10px 30px; cursor: pointer;" class="playlistButtonAudio"></a>
    </div>
        `
        }
    });
}
element.insertAdjacentHTML('beforeend', result); //Insertamos en el element todo el html generado anteriormente