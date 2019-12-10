var toggle = document.getElementById('top-navbar-toggle');
var leftNavbar = document.getElementById('left-navbar');
toggle.addEventListener("click", function(){
    var classes = leftNavbar.className.split(" ");
    if (classes.indexOf("showing") != -1) {
        leftNavbar.classList.remove("showing");
        leftNavbar.classList.add("hiding");
    } else if (classes.indexOf("hiding") != -1) {
        leftNavbar.classList.remove("hiding");
        leftNavbar.classList.add("showing");
    }
});