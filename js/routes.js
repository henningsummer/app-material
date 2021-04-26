$(document).ready(function () {
    $(".progress").css('display', 'block')
    setTimeout(() => {
    $("#content").load('pages/listagem.html');
     $(".progress").css('display', 'none')
    }, 800);
});

const rotas = ['pages/info.html', 'pages/listagem.html']

function muda_rota(rota) {
    console.log(`info ${rota}`);
    $("#content").html('')
    $(".progress").css('display', 'block')
    $(".sidenav-overlay").click()
    setTimeout(() => {
        $("#content").load(rota);
        $(".progress").css('display', 'none')
    }, 2000);
}




function infoPage() {
    // console.log('info page');
    // $("#content").html('')
    // $(".progress").css('display', 'block')
    // $(".sidenav-overlay").click()
    // setTimeout(() => {
    //     $("#content").load('pages/info.html');
    //     $(".progress").css('display', 'none')
    // }, 2000);
    muda_rota(rotas[0])

};
function homePage() {
    // console.log('info page');
    // $("#content").html('')
    // $(".progress").css('display', 'block')
    // $(".sidenav-overlay").click()
    // setTimeout(() => {
    //     $("#content").load('pages/listagem.html');
    //     $(".progress").css('display', 'none')
    // }, 2000);

    muda_rota(rotas[1])

};