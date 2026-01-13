function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    const linksDownloads = {
        1: "https://playvalorant.com/pt-br/download/",
        2: "https://signup.leagueoflegends.com/pt-br/signup/redownload",
        3: "https://www.minecraft.net/pt-br/download"
    };

    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return'); 
    botao.textContent = 'Redirecionando...♡';

    setTimeout(() => {
        if (linksDownloads[id]) {
            window.open(linksDownloads[id], '_blank');
            botao.textContent = 'Baixar';
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
        }
    }, 1230); 
}