
function init() {
    "use strict";
    console.log('hello');
    menu.classList.toggle('hidden');
    button.classList.toggle('close')

}

var menu = document.getElementById('nav-menu');
var button = document.getElementById('hamburger');
window.onload = button.addEventListener("click", init);