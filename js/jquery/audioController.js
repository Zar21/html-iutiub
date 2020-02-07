/**
 * creamos una función para recoger parámetros de la URL
*/
$.urlParam = function(name){
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


// carga al principio
$(document).ready(function(){
    // usa la función creada para recoger el parámetro 'id'
    const id = $.urlParam('id');
    const baseURL = './multimedia/audio/';

    // obtiene el audio correcto del JSON 
    // el JSON está declarado en el fichero list.js que se carga simultáneamente
    let audio = media.multimedia.filter(elemento => elemento.id == id);
    audio = audio[0];
    let src = baseURL+audio.media;

    // si no hay audio con el id indicado o no se ha pasado id (se tendira que hacer manualmente)
    // salen textos de muestra en su lugar
    if (audio) {
        // añadimos el audio creando un source nuevo
        $('#play-audio').append(
            $('<source></source>').attr({ src : src, type: 'audio/mp3', id: 'audiosource' })
        );
        // cambia el contenido del nombre del audio al correcto
        $('#audioName').html(audio.text);
        // cambia el contenido de la descripción del audio al correcto
        $('#audioDescription').html(audio.description);
        // cambia las reproducciones del audio al número correcto
        $('#audioViews').html(audio.num_rep);
    }
});