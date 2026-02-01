document.addEventListener('DOMContentLoaded', function() {

    //altura da seção hero//
    const heroSection = document.querySelector('.hero');
    const alturahero = heroSection.clientHeight;//para saber a altura do elemento usamos essa propriedade 'clientHeight'//
    
    window.addEventListener ('scroll', function() {
        const posicaoAtual = window.scrollY;//mostra a posição do scroll na vertical//

        if (posicaoAtual < alturahero) {
            ocultarElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }

    });//para acompanhar a rolagem que o usuario fara em nossa pagina, para isso usamos o evento 'scroll' no objeto window no propio navegador. Também para pegarmos o posição do usuario usamos o atributo 'scrollY' porque é uma rolagem vertical//
})

//função para ocultar elementos do header//
function ocultarElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');//adiciona a classe que esconde o header//
}

//função para ocultar elementos do header//
function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');//adiciona a classe que esconde o header//
}