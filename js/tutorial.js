$(document).ready(function () {

    changeCss();

    function detectar_mobile() {
        var check = false;
        if (screen.width <= 480) {
            check = true;
        }
        return check;
    }

    function changeCss() {
        if (detectar_mobile()) {
            $(".img100").addClass("img-width-100");
            $(".img10").addClass("img-width-10");
            $("#div-corpo").addClass("font-mobile");
            $(".titulo").addClass("titulo-mobile");
            $(".subtopico").addClass("subtopico-mobile");
        }
    }

    function removeCss() {
        $(".img100").removeClass("img-width-100");
        $(".img10").removeClass("img-width-10");
        $("#div-corpo").removeClass("font-mobile");
        $(".titulo").removeClass("titulo-mobile");
        $(".subtopico").removeClass("subtopico-mobile");
    }
});