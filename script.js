$(window).on("load", function(){
    $.ready.then(function(){
        $(".black").removeClass("blackon");
        $(".black").addClass("blackoff");
    });
 });
window.onbeforeunload = function() {window.scrollTo(0,0);}
$(document).ready(function(){
    $(this).scrollTop(0);
    $(".project").mouseenter(function(){
        $(this).find(".projtitle").addClass("projtitleon");
        $(this).find(".projtitle").removeClass("projtitleoff");
    });
    $(".project").mouseleave(function(){
        $(".projtitle").removeClass("projtitleon");
        $(".projtitle").addClass("projtitleoff");
    });
    $("#projects").mouseenter(function() {
        $("#projline").addClass("underline");
        $("#projline").removeClass("underlineoff");
    });
    $("#projects").mouseleave(function() {
        $("#projline").removeClass("underline");
        $("#projline").addClass("underlineoff");
    });
    $("#about").mouseenter(function() {
        $("#aboutline").addClass("underline");
        $("#aboutline").removeClass("underlineoff");
    });
    $("#about").mouseleave(function() {
        $("#aboutline").removeClass("underline");
        $("#aboutline").addClass("underlineoff");
    });
    $("#projects").click(function(e) {
        e.preventDefault();
        var position = ($("#partitle1").offset().top)-100;
        $("body, html").animate({
            scrollTop: position
        } );
    });
    $("#about").click(function(e) {
        e.preventDefault();
        var position = ($("#partitle2").offset().top)-100;
        $("body, html").animate({
            scrollTop: position
        } );
    });
    $(".project").click(function() {
        var ext = ".jpg";
        var immagine = String($(this).find("img").attr("src"));
        immagine = immagine.substr(0, immagine.length-8);
        immagine = immagine.concat(ext);
        $(".panelimg").attr("src", immagine);
        $(".panel").removeClass("hidden");
        $(".panel").addClass("visible");
    });
    $(".cancelimg").click(function() {
        $(".panel").addClass("hidden");
        $(".panel").removeClass("visible");

    });
    var distance = $("#navbar").offset().top,
    $window = $(window);

    $window.scroll(function() {
        if ( $window.scrollTop() >= distance ) {
            $("#navbar").addClass("navshort");
            $("#navbar").removeClass("navbig");
            $(".navelement").addClass("navelshort");
            $(".navelement").removeClass("navelbig");
            /*$(".navtitle").addClass("ntshow");
            $(".navtitle").removeClass("nthide");*/
        }
        else {
            $("#navbar").addClass("navbig");
            $("#navbar").removeClass("navshort");
            $(".navelement").addClass("navelbig");
            $(".navelement").removeClass("navelshort");
            /*$(".navtitle").removeClass("ntshow");
            $(".navtitle").addClass("nthide");*/
        }
    });
});