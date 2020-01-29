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
        tr.appendTo($('.datatable tbody'));
        hideForm();
    }

    function modifyTable(event) {
        var tableIndex = event.data;
        var trs = $('.datatable tbody tr');
        var tr = $(trs[tableIndex]).children();
        $('.adminForm .inputs input').each(function(i){
            $(tr[i + 1]).text($(this).val());
        });
        hideForm();
    }

    function addForm() {
        $('.adminForm .inputs').empty();
        $('.adminForm legend').html('Añadir');
        $('.adminForm .action').html('<i class="fas fa-plus"></i>');
        $('.datatable thead th').each(function(index){
            if (index != 0) {
                column = $(this).text();
                var input = '<span>' + column + ': </span><input type="text" name="' + column + '" placeholder="' + column + '"/><br/>';
                $('.adminForm .inputs').append(input);
            }
        });
        $('.action').off('click');
        $('.action').on('click', addToTable);
        showForm();
    }

    function deleteRow() {
        $(this).parent().parent().remove();
    }

    function modifyRow() {
        children = $(this).parent().parent().children();
        $('.adminForm .inputs').empty();
        $('.adminForm legend').html('Modificar');
        $('.adminForm .action').html('<i class="fas fa-pen"></i>');
        $('.datatable thead th').each(function(index){
            if (index != 0) {
                column = $(this).text();
                var input = '<span>' + column + ': </span><input type="text" value="' + $(children[index]).text() + '" name="' + column + '" placeholder="' + column + '"/><br/>';
                $('.adminForm .inputs').append(input);
            }
        });
        var thisRow = $(this).parent().parent();
        var rows = $(this).parent().parent().parent().children();
        var index = 0;
        rows.each(function(i, value) {
            if (thisRow.get(0) === value) {
                index = i;
            }
        })
        $('.action').off('click');
        $('.action').on('click', index, modifyTable);
        showForm();
    }

    $(document).on('click', '.addForm', addForm);
    $(document).on('click', '.cancelForm', hideForm);
    $(document).on('click', '.modifyRow', modifyRow);
    $(document).on('click', '.deleteRow', deleteRow);
});