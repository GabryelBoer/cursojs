function contar() {
    var ini = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpasso')
    var res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    }
    else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p == 0) {
            alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        res.innerHTML = 'Contando: <br>'
        if(i < f) {
            for(var c = i; c < f; c+=p) {
                res.innerHTML += `${c} 👉 `
            }
        }
        else {
            for (var c = i; c > f; c-=p) {
                res.innerHTML += `${c} 👉 `
            }
        }
        res.innerHTML += '🏁'
    }
}
