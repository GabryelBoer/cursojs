function gerar() {
    var num = document.querySelector('input#tabnum')
    var res = document.querySelector('select#seltab')
    
    if(num.value.length == 0) {
        alert('Digite um numero!')
    }
    else {
        res.innerHTML = ''
        var n = Number(num.value)
        for(var c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}