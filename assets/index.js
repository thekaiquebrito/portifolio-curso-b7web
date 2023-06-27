var botaoMenu = document.querySelector('.menu');
var fundoPreto = document.querySelector('.fundo-preto');
var botaoFecharMenu = document.querySelector('.fechar-menu');
var menuAberto = document.querySelector('.menu-aberto');

function abrirMenu() {
    fundoPreto.style.display = 'block';
    menuAberto.style.display = 'flex';
    botaoMenu.style.display = 'none';
    botaoFecharMenu.style.display = 'block';
}

function fecharMenu() {
    fundoPreto.style.display = 'none';
    menuAberto.style.display = 'none';
    botaoMenu.style.display = 'flex';
    botaoFecharMenu.style.display = 'none';
}