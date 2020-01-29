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

// obtiene el audio correcto del JSON 
// el JSON está declarado en el fichero list.js que se carga simultáneamente
let audio = media.multimedia.filter(elemento => elemento.id == id);
audio = audio[0];

// si no hay audio con el id indicado o no se ha pasado id (se tendira que hacer manualmente)
// salen textos de muestra en su lugar
if (audio) {
    // cambia el contenido del nombre del audio al correctoç
    document.getElementById('audioName').innerHTML = audio.text;
    // cambia el contenido de la descripción del audio al correcto
    document.getElementById('audioDescription').innerHTML = audio.description;
    // cambia las reproducciones del audio al número correcto
    document.getElementById('audioViews').innerHTML = audio.num_rep;
}