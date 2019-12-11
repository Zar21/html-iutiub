var toggle = document.getElementById('top-navbar-toggle'); //Obtiene el botón para activar la barra lateral
var leftNavbar = document.getElementById('left-navbar'); //Obtiene la barra lateral
toggle.addEventListener("click", function(){ //Añade el evento de click al botón para activar la barra lateral
    var classes = leftNavbar.className.split(" "); //Obtiene las clases de la barra lateral y las organiza en un array
    if (classes.indexOf("showing") != -1) { //Si tiene la clase showing, se elimina y se añade la clase hiding
        leftNavbar.classList.remove("showing");
        leftNavbar.classList.add("hiding");
    } else if (classes.indexOf("hiding") != -1) { //Si tiene la clase hiding, se elimina y se añade la clase showing
        leftNavbar.classList.remove("hiding");
        leftNavbar.classList.add("showing");
    }
});