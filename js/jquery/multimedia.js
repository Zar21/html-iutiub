$(document).ready(function () {
    // VARIABLES
    let videosList = $("#videoList") // elemento de listad e videos
    let audiosList = $("#audioList") // elemento de lista de audios
    let multimediaList = $("#multimediaList") // elemento de lista de audios y videos
    let finalContainerList;  // lista final donde se colocaran los elementos filtrados
    let elements = []; // elementos que van a ser peustos



    if (multimediaList.length > 0) { // si existe el div muiltimeda
        finalContainerList = multimediaList; // el contenedor final serà multimediaList
        elements = media.multimedia // los elementos que se van a poner son todos, videos y audios

    } else if (videosList.length > 0) { // si existe el elemento de lista de videos
        elements = elements.concat(media.multimedia.filter(e => e.type == "video")) // se filtran los elementos para mostrar solo los videos
        finalContainerList = videosList; // el contenedor deonde se van a poner los elementos es la lista de videos

    } else if (audiosList.length > 0) { // si existe el elemento de lista de audios
        elements = elements.concat(media.multimedia.filter(e => e.type == "audio")) // se filtran los elementos para mostrar solo los audios
        finalContainerList = audiosList; // el contenedor deonde se van a poner los elementos es la lista de audios
    }

    // itera sobre todos los elementos anteriormente fitlrados i crea un elemento nuevo
    // inserta un parámetro en la URL para indicar el video o audio al que tiene que dirigir (?id={})
    $.each(elements, (index, element) => {
        
        finalContainerList.append(
            `<div class="left" id="${element.id}">
                <a href="${element.type}Details.html?id=${element.id}">
                <img class="thumbnails" src="multimedia/img/${element.image}" alt="${element.type} thumbnail"></a><br>
                <a href="${element.type}Details.html?id=${element.id}">${element.text}</a><br>
                <small><span style="color:grey">${element.num_rep} Reproducciones</span> Hace 14 dias</small>
                <a style="padding: 10px 30px; cursor: pointer; background-color: rgba(0,255,0,0.3)" class="playlistButtonVideo">+</a>
            </div>`)

    })

})