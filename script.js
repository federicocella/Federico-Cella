function pageAppear() {
    $(".black").removeClass("blackon");
    $(".black").addClass("blackoff");
}
window.onload = pageAppear;
$(document).ready(function(){
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
    $(".navelement").click(function(){
		window.scroll({ top: window.innerHeight, left: 0, behavior: 'smooth' });
	});
});