$(function () {

    $('.carousel').carousel();

    $("#btnEnviar").click(function () {
        alert("Formulario enviado correctamente.. lo contactaremos a la brevedad!");
        // $("#contacto").fadeOut("slow");
    });

    $(document).ready(function () {
        $('[data-bs-toggle="tooltip"]').tooltip();
    });

    // Funcion para alternar transparencia de navbar
    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {

            document.getElementById("navbar").style.background = "#000000";
        } else {

            document.getElementById("navbar").style.background = "none";
        }
    }
})