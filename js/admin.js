    
    
/**
 * Este click simula una delegacion de eventos ya que ejecuta la funcion indicada en la propiedad
 * data-action del elemento. En caso de ser ciertas acciones este evento envie el elemento a la funcion ejecutada
 */
document.getElementById("content").addEventListener("click", (e) => {
    let data_action = null;
    (e.target.tagName == 'I') ? data_action = e.target.parentElement.getAttribute("data-action") : data_action = e.target.getAttribute("data-action") //En el caso de ser un <i> debe buscar la propiedad data-action en su elemento padre.
    if (data_action) {
        if (data_action == "deleteRow" || data_action == "modifyRow" || data_action == "modifyTable") {
            window[data_action]((e.target.tagName == 'I') ? e.target.parentElement : e.target)
        }
        else {
            window[data_action]()
        }
    }
});

/**
 * Muestra el formulario y oculta la tabla de información
 */
function showForm() {
    document.querySelector(".adminForm").style.display = "block";
    document.querySelector(".datatable").style.display = "none";
}

/**
 * Oculta el formulario y muestra la tabla de información
 */
function hideForm() {
    document.querySelector(".adminForm").style.display = "none";
    document.querySelector(".datatable").style.display = "";
}

/**
 * Añade un formulario a la página basándose en los campos de la tabla a modificar, vale para usuarios, vídeos y audios
 */
function addForm() {
    document.querySelector(".adminForm .inputs").innerHTML = ""; //Limpia los inputs del formulario para dejarlo vacio
    document.querySelector(".adminForm legend").innerHTML = "Añadir"; //Cambia la leyenda a Añadir
    document.querySelector(".adminForm .action").innerHTML = "<i class='fas fa-plus'></i>"; //Se añade el icono +
    let first = true;
    Array.from(document.querySelectorAll(".datatable thead th")).forEach((element) => { //Se itera por todos los campos que deben aparecer en el formulario
        if (!first) { //En caso de ser el primer elemento se ignora
            column = element.innerText;
            var input = '<span>' + column + ': </span><input type="text" name="' + column + '" placeholder="' + column + '"/><br/>';
            document.querySelector(".adminForm .inputs").insertAdjacentHTML('beforeend', input); //Se crea el input
        }
        else {
            first = false;
        }
    });
    document.querySelector(".adminForm .action").setAttribute('data-action', "addToTable"); //Añade al boton el data-action addToTable para que se ejecute esta funcion al pulsarlo
    showForm();
}

/**
 * Añade un formulario a la página basándose en los campos de la tabla a modificar, vale para usuarios vídeos y audios
 * Rellena los campos del formulario con los datos de la fila seleccionada
 * @param {object} element contiene el botton que ha sido pulsado
 */
function modifyRow(element) {
    let children = Array.from(element.parentElement.parentElement.getElementsByTagName("TD")) //Selecciona todos los td de la linea y los guarda en una array
    document.querySelector(".adminForm .inputs").innerHTML = ""; //Limpia los inputs del formulario para dejarlo vacio
    document.querySelector(".adminForm legend").innerHTML = "Modificar"; //Cambia la leyenda a Modificar
    document.querySelector(".adminForm .action").innerHTML = "<i class='fas fa-pen'></i>"; //Se añade el icono lapiz
    let count = 0;
    Array.from(document.querySelectorAll(".datatable thead th")).forEach((element) => {
        if (count > 0) { //En caso de ser el primero se ignora
            column = element.innerText;
            var input = '<span>' + column + ': </span><input type="text" value="' + children[count].innerText + '" name="' + column + '" placeholder="' + column + '"/><br/>';
            document.querySelector(".adminForm .inputs").insertAdjacentHTML('beforeend', input); //Se crea el input
        }
        count++
    });
    let thisRow = element.parentElement.parentElement;
    let rows = Array.from(element.parentElement.parentElement.parentElement.getElementsByTagName("TR"))
    let index = 0;
    let indexCount = 0;
    rows.forEach((element) => { //Mediante este forEach se encuentra cual es el index de la linea modificada
        if (element == thisRow) {
            index = indexCount
        }
        indexCount++
    })
    document.querySelector(".adminForm .action").setAttribute('data-action', "modifyTable"); //Añade al boton el data-action modifyTable para que se ejecute esta funcion al pulsarlo
    document.querySelector(".adminForm .action").setAttribute('table-index', index); //Añade al boton la propiedad table-index con el numero de index de los datos que estamos modificando
    showForm();
}
/**
 * Borra una fila de la tabla
 * @param {object} element contiene el botton que ha sido pulsado
 */
function deleteRow(element) {
    element.parentElement.parentElement.parentElement.removeChild(element.parentElement.parentElement);
}

/**
 * Añade una nueva fila a la tabla con nueva información
 */
function addToTable() { 
    let tr = document.createElement("TR") //Crea elemento tr
    tr.insertAdjacentHTML('beforeend', '<td><button data-action="modifyRow"><i class="fas fa-pen"></i></button> <button data-action="deleteRow"><i class="fas fa-trash"></i></button></td>'); //Añade botones al primer td para modificar y borrar
    document.querySelectorAll(".adminForm .inputs input").forEach(element => { //Por cada elemento del formulario
        let td = document.createElement("TD");
        td.innerHTML = element.value //Añade el valor introducido al td correspondiente
        tr.appendChild(td)
    });
    document.querySelector('.datatable tbody').appendChild(tr);
    hideForm();
}

/**
 * Modifica la fila especificada con los parámetros del formulario
 *
 * @param {object} element contiene el botton que ha sido pulsado
 */
function modifyTable(element) {
    let tableIndex = element.getAttribute("table-index"); //Obtiene el index de la linea que hemos modificado
    let trs = Array.from(document.querySelectorAll('.datatable tbody tr')); //Obtiene los trs de la tabla
    let tr = Array.from(trs[tableIndex].getElementsByTagName("TD")); //Obtiene todos los tds del tr especificado en el tableIndex
    let count = 0;
    document.querySelectorAll('.adminForm .inputs input').forEach(element => { //Introducimos los nuevos valores en la tabla
      count++
      tr[count].innerHTML = element.value;
    });
    hideForm();
}