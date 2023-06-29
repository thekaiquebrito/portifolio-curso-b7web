var menuAberto = document.querySelector('.menu-mobile-aberto');
var menu = document.querySelector('.menu-mobile');
var fundoPreto = document.querySelector('.fundo-preto');

function abrirMenu() {
    if (menuAberto.classList.contains('active')) {
        menuAberto.classList.remove('active')
        menuAberto.classList.add('inative');
        fundoPreto.style.display = 'none'
    } else {
        menuAberto.classList.remove('inative');
        menuAberto.classList.add('active');
        fundoPreto.style.display = 'block';
    }
}