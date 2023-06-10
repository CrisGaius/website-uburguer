function iniciaModal(modalID) {
    const modal = document.getElementById(modalID)
    if(modal){
        modal.classList.add('mostrar')
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        })
    }
}

const numAtualWrappper = document.getElementById('num-atual')

var numAtual = 1

function somar() {
    numAtual += 1 
    numAtualWrappper.innerHTML = numAtual
}

function subtrair() {
    
    if (numAtualWrappper.innerHTML >= 2) {
        numAtual -= 1
        numAtualWrappper.innerHTML = numAtual;
    }
}

const numAtualWrappper2 = document.getElementById('num-atual2')

var numAtual2 = 0

function somar2() {
    numAtual2 += 1 
    numAtualWrappper2.innerHTML = numAtual2
}

function subtrair2() {
    
    if (numAtualWrappper2.innerHTML >= 1) {
        numAtual2 -= 1
        numAtualWrappper2.innerHTML = numAtual2;
    }
}

const numAtualWrappper3 = document.getElementById('num-atual3')

var numAtual3 = 0

function somar3() {
    numAtual3 += 1 
    numAtualWrappper3.innerHTML = numAtual3
}

function subtrair3() {
    
    if (numAtualWrappper3.innerHTML >= 1) {
        numAtual3 -= 1
        numAtualWrappper3.innerHTML = numAtual3;
    }
}

const numAtualWrappper4 = document.getElementById('num-atual4')

var numAtual4 = 0

function somar4() {
    numAtual4 += 1
    numAtualWrappper4.innerHTML = numAtual4
}

function subtrair4() {
    
    if (numAtualWrappper4.innerHTML >= 1) {
        numAtual4 -= 1
        numAtualWrappper4.innerHTML = numAtual4;
    }
}

var botaoFinalizar = document.querySelector('button#finalizar-pedido')

botaoFinalizar.addEventListener('click', function enviarProZap () {
    var div = document.querySelector('div.conteudo-modal')

    var nomeDoProduto = div.children[1].textContent
    var quantidadeDoProduto = div.children[4].textContent

    var loader = document.querySelector('div#container-loader')
    loader.style.display = 'inline-block'
    

    window.location.href = `https://wa.me//5581983249323?text=Ol%c3%a1%2c+gostaria+de+${quantidadeDoProduto}+${nomeDoProduto}+que+vi+no+site+de+voc%c3%aas.`
})