let num = document.querySelector('input#txtnum');
let lstn = document.querySelector('select#listanum');
let res = document.querySelector('div#res');
let valores = [];

function adicionar() {  
    if (txtnum.value.length == 0) {
        alert('Digite um número');
    }
    else {
        if(valores.indexOf(Number(num.value)) != -1 || num.value > 100 || num.value < 0) {
            alert('Valor invalido ou já encontrado na lista!')
        }
        else {
            valores.push(Number(num.value));
            let item = document.createElement('option');
            item.text = `Valor ${num.value} adicionado.`;
            lstn.appendChild(item);
            res.innerHTML = '';
        }
        num.value = '';
        num.focus();
    }
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    }
    else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores) {
            soma += valores[pos];
            if(valores[pos] > maior) {
                maior = valores[pos];
            }
            if(valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        media = (soma/tot);
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
}