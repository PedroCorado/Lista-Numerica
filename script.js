let numeroStr = document.getElementById('numeros');
let selecao = document.getElementById('selecao');
let h3 = document.getElementById('h3')
let array = [];
function adicionar() {
    let numeros = Number(numeroStr.value);
    if (array.includes(numeros) || numeros == '') {
    alert('Elemento já existe na array ou esta vazio!');
    return;
    }
    array.push(numeros);
    let option = document.createElement('option');
    option.value = array.length - 1;
    option.text = array[array.length - 1];
    selecao.appendChild(option);
}
let soma = 0
function finalizar() {
    let quantidade = array.length
    for(let i = 0;i < array.length;i++){
        soma += array[i]
    }
    let media = soma / quantidade
    array.sort()
    let ultimoValor = array[array.length - 1]
    let primeiroValor = array[0]
    h3.innerText += `A quantidade de numeros cadastrados e ${quantidade}\n`
    h3.innerText += `A soma de todos é ${soma}\n`
    h3.innerText += `A media dos numero é ${media}\n`
    h3.innerText += `O menor numero e ${primeiroValor}\n`
    h3.innerText += `O maior numero e ${ultimoValor}\n`
}