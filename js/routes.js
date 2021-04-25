$(document).ready(function () {
    $(".progress").css('display', 'block')
    setTimeout(() => {
    $("#content").load('pages/listagem.html');
     $(".progress").css('display', 'none')
    }, 800);
});




function infoPage() {
    console.log('info page');
    $("#content").html('')
    $(".progress").css('display', 'block')
    $(".sidenav-overlay").click()
    setTimeout(() => {
        $("#content").load('pages/info.html');
        $(".progress").css('display', 'none')
    }, 2000);

};
function homePage() {
    console.log('info page');
    $("#content").html('')
    $(".progress").css('display', 'block')
    $(".sidenav-overlay").click()
    setTimeout(() => {
        $("#content").load('pages/listagem.html');
        $(".progress").css('display', 'none')
    }, 2000);

};