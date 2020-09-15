const mobile = window.matchMedia("screen and (max-width: 320px)");
var nav = document.querySelector(".nav--header");

if (mobile.matches) {
  var icono = document.getElementById("icono");
  icono.addEventListener("click", function () {
    icono.classList.toggle("fa-times");
    nav.classList.toggle("show");
  });
}
