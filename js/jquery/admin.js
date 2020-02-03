/**
 * Se ejecuta cuando se ha cargado toda la página
 */
$(document).ready(function(){

    /**
     * Muestra el formulario y esconde la tabla
     */
    function showForm() {
        $('.adminForm').show();
        $('.datatable').hide();
    }

    /**
     * Muestra la tabla y esconde el formulario
     */
    function hideForm() {
        $('.adminForm').hide();
        $('.datatable').show();
    }

    /**
     * Añade una nueva fila a la tabla con nueva información
     */
    function addToTable() {
        var tr = $('<tr></tr>'); //Crea elemento tr
        $('<td><button class="modifyRow"><i class="fas fa-pen"></i></button> <button class="deleteRow"><i class="fas fa-trash"></i></button></td>').appendTo(tr); //Añade botones al primer td para modificar y borrar
        $('.adminForm .inputs input').each(function(i){ //Por cada elmento del formulario
            $('<td></td>').text($(this).val()).appendTo(tr); //Añade el valor introducido al td correspondiente
        });
        tr.appendTo($('.datatable tbody')); //Añade el tr al final de la tabla
        hideForm();
    }

    /**
     * Modifica la fila especificada con los parámetros del formulario
     *
     * @param {object} event contiene el índice de la fila que se va a modificar
     */
    function modifyTable(event) {
        var tableIndex = event.data;
        var trs = $('.datatable tbody tr'); //Obtiene los trs de la tabla
        var tr = $(trs[tableIndex]).children(); //Obtiene todos los tds del tr especificado en el tableIndex
        $('.adminForm .inputs input').each(function(i){ //Los inputs tienen el mismo índice que los elementos del formulario generado
            $(tr[i + 1]).text($(this).val()); //Así que introducimos el valor de los inputs en los campos de la tabla
        });
        hideForm();
    }

    /**
     * Añade un formulario a la página basándose en los campos de la tabla a modificar, vale para usuarios, vídeos y audios
     */
    function addForm() {
        $('.adminForm .inputs').empty(); //Vacía los campos del formulario ya que se van a añadir nuevos campos
        $('.adminForm legend').html('Añadir'); //Se muestra que la acción que se está realizando es la de añadir en el legend del fieldset
        $('.adminForm .action').html('<i class="fas fa-plus"></i>'); //Se cambia el botón de la acción a un + para indicar que se va a añadir
        $('.datatable thead th').each(function(index){ //Por cada cabecera de la tabla
            if (index != 0) { //Si el índice es diferente de 0 ya que este siempre continene las acciones
                column = $(this).text(); //Obtener el texto de la celda
                var input = '<span>' + column + ': </span><input type="text" name="' + column + '" placeholder="' + column + '"/><br/>'; //Crea un input con los datos de esa columna
                $('.adminForm .inputs').append(input); //Añade el input al formulario
            }
        });
        $('.action').off('click'); //Se quita cualquier acción que tuviera este botón, ya sea modificar o añadir
        $('.action').on('click', addToTable); //Se añade el evento de addToTable al botón de la acción
        showForm();
    }

    /**
     * Borra una fila de la tabla
     */
    function deleteRow() {
        $(this).parent().parent().remove();
    }

    /**
     * Añade un formulario a la página basándose en los campos de la tabla a modificar, vale para usuarios vídeos y audios
     * Rellena los campos del formulario con los datos de la fila seleccionada
     */
    function modifyRow() {
        children = $(this).parent().parent().children();
        $('.adminForm .inputs').empty(); //Vacía los campos del formulario ya que se van a añadir nuevos campos
        $('.adminForm legend').html('Modificar'); //Se muestra que la acción que se está realizando es la de modificar en el legend del fieldset
        $('.adminForm .action').html('<i class="fas fa-pen"></i>'); //Se cambia el botón de la acción a un lápiz para indicar que se va a modificar
        $('.datatable thead th').each(function(index){ //Por cada cabecera de la tabla
            if (index != 0) { //Si el índice es diferente de 0 ya que este siempre continene las acciones
                column = $(this).text(); //Obtener el texto de la celda
                var input = '<span>' + column + ': </span><input type="text" value="' + $(children[index]).text() + '" name="' + column + '" placeholder="' + column + '"/><br/>'; //Crea un input con los datos y el valor de esa columna
                $('.adminForm .inputs').append(input); //Añade el input al formulario
            }
        });
        //El código siguiente sirve para obtener el índice de la fila que se va a modificar, para después en la acción de modificar se modifique la fila correcta
        var thisRow = $(this).parent().parent(); //La fila del botón que se ha pulsado
        var rows = $(this).parent().parent().parent().children(); //Todas las filas
        var index = 0; //Indice de la fila que se debe modificar
        rows.each(function(i, value) { //Se recorren todas las filas
            if (thisRow.get(0) === value) { //Si la fila del botón que se ha pulsado es la misma que la del valor
                index = i; //El indice pasa a ser el de la fila seleccionada
            }
        })
        $('.action').off('click'); //Se quita cualquier acción que tuviera este botón, ya sea modificar o añadir
        $('.action').on('click', index, modifyTable); //Se añade el evento de modifyTable con el parámetro del índice al botón de la acción
        showForm();
    }

    //Al delegar los de esta manera no hará falta añadir el evento a los nuevos elementos que creemos
    $(document).on('click', '.addForm', addForm);
    $(document).on('click', '.cancelForm', hideForm);
    $(document).on('click', '.modifyRow', modifyRow);
    $(document).on('click', '.deleteRow', deleteRow);
});