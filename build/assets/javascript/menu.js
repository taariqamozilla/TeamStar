
function init() {
    "use strict";
    console.log('hello');
    menu.classList.toggle('hidden');
}

var menu = document.getElementById('nav-menu');
var button = document.getElementById('hamburger');
window.onload = button.addEventListener("click", init);