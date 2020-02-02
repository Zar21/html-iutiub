    
    
document.getElementById("content").addEventListener("click", (e) => {
    let data_action = null;
    (e.target.tagName == 'I') ? data_action = e.target.parentElement.getAttribute("data-action") : data_action = e.target.getAttribute("data-action")
    if (data_action) {
        if (data_action == "deleteRow" || data_action == "modifyRow" || data_action == "modifyTable") {
            window[data_action]((e.target.tagName == 'I') ? e.target.parentElement : e.target)
        }
        else {
            window[data_action]()
        }
    }
});

function showForm() {
    document.querySelector(".adminForm").style.display = "block";
    document.querySelector(".datatable").style.display = "none";
}

function hideForm() {
    document.querySelector(".adminForm").style.display = "none";
    document.querySelector(".datatable").style.display = "";
}

function addForm() {
    document.querySelector(".adminForm .inputs").innerHTML = "";
    document.querySelector(".adminForm legend").innerHTML = "Añadir";
    document.querySelector(".adminForm .action").innerHTML = "<i class='fas fa-plus'></i>";
    let first = true;
    Array.from(document.querySelectorAll(".datatable thead th")).forEach((element) => {
        if (!first) {
            column = element.innerText;
            var input = '<span>' + column + ': </span><input type="text" name="' + column + '" placeholder="' + column + '"/><br/>';
            document.querySelector(".adminForm .inputs").insertAdjacentHTML('beforeend', input);
        }
        else {
            first = false;
        }
    });
    document.querySelector(".adminForm .action").setAttribute('data-action', "addToTable");
    showForm();
}

function modifyRow(element) {
    let children = Array.from(element.parentElement.parentElement.getElementsByTagName("TD"))
    document.querySelector(".adminForm .inputs").innerHTML = "";
    document.querySelector(".adminForm legend").innerHTML = "Modificar";
    document.querySelector(".adminForm .action").innerHTML = "<i class='fas fa-pen'></i>";
    let count = 0;
    console.log(children)
    Array.from(document.querySelectorAll(".datatable thead th")).forEach((element) => {
        if (count > 0) {
            column = element.innerText;
            var input = '<span>' + column + ': </span><input type="text" value="' + children[count].innerText + '" name="' + column + '" placeholder="' + column + '"/><br/>';
            document.querySelector(".adminForm .inputs").insertAdjacentHTML('beforeend', input);
        }
        count++
    });
    let thisRow = element.parentElement.parentElement;
    let rows = Array.from(element.parentElement.parentElement.parentElement.getElementsByTagName("TR"))
    let index = 0;
    let indexCount = 0;
    rows.forEach((element) => {
        if (element == thisRow) {
            index = indexCount
        }
        indexCount++
    })
    document.querySelector(".adminForm .action").setAttribute('data-action', "modifyTable");
    document.querySelector(".adminForm .action").setAttribute('table-index', index);
    showForm();
}
function deleteRow(element) {
    element.parentElement.parentElement.parentElement.removeChild(element.parentElement.parentElement);
}

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

function modifyTable(element) {
    let tableIndex = element.getAttribute("table-index");
    let trs = Array.from(document.querySelectorAll('.datatable tbody tr'));
    let tr = Array.from(trs[tableIndex].getElementsByTagName("TD"));
    console.log(tr)
    let count = 0;
    document.querySelectorAll('.adminForm .inputs input').forEach(element => {
      count++
      tr[count].innerHTML = element.value;
    });
    hideForm();
}
    /*function showForm() {
        document.querySelector(".adminForm").style.display = "block";
        document.querySelector(".datatable").style.display = "none";
    }

    function hideForm() {
        document.querySelector(".adminForm").style.display = "none";
        document.querySelector(".datatable").style.display = "block";
    }


    function modifyTable(event) {
        console.log(event.data);
        tableIndex = event.data;
        $('.adminForm .inputs input').each(function(index, value){
            console.log(index);
            
        });
        if (event.data != -1) {

        } else {

        }
    }

    function addForm() {
        document.querySelector(".adminForm .inputs").innerHTML = "";
        document.querySelector(".adminForm legend").innerHTML = "Añadir";
        document.querySelector(".adminForm .action").innerHTML = "<i class='fas fa-plus'></i>";
        let first = true;
        Array.from(document.querySelectorAll(".datatable thead th")).forEach((element) => {
            if (!first) {
                column = element.innerText;
                var input = '<span>' + column + ': </span><input type="text" name="' + column + '" placeholder="' + column + '"/><br/>';
                document.querySelector(".adminForm .inputs").insertAdjacentHTML('beforeend', input);
            }
            else {
                first = false;
            }
        });
        //falta per traduir
        //$('.action').off('click');
        document.querySelector(".action").addEventListener("click", modifyTable)
        //$('.action').on('click', -1, modifyTable);
        showForm();
    }

    function deleteRow(e) {
        e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
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

    $('.addForm').on('click', addForm);
    $('.cancelForm').on('click', hideForm);
    $('.modifyRow').on('click', modifyRow);
    $('.deleteRow').on('click', deleteRow);*/