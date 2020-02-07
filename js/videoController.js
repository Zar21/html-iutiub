// creamos una función para recoger parámetros de la URL
urlParam = function(name){
    // comprobamos una expresión regular contra la url actual
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    
    // si no hay resultado vuelve null
    if (results==null){
       return null;
    } else{
        // devuelve el valor del parámetro
       return results[1] || 0;
    }
}

// usa la función creada para recoger el parámetro 'id'
const id = urlParam('id');
const baseURL = './multimedia/video/';

// obtiene el video correcto del JSON 
// el JSON está declarado en el fichero list.js que se carga simultáneamente
let video = media.multimedia.filter(elemento => elemento.id == id);
video = video[0];

// si no hay video con el id indicado o no se ha pasado id (se tendira que hacer manualmente)
// salen textos de muestra en su lugar
if (video) {
    let videoPlayer = document.getElementById('play-video');
    let source = document.createElement('source');
    let src = baseURL+video.media;

    source.setAttribute('src', src);
    videoPlayer.appendChild(source);
    // cambia el contenido del nombre del video al correctoç
    document.getElementById('videoName').innerHTML = video.text;
    // cambia el contenido de la descripción del video al correcto
    document.getElementById('videoDescription').innerHTML = video.description;
    // cambia las reproducciones del video al número correcto
    document.getElementById('videoViews').innerHTML = video.num_rep;
}