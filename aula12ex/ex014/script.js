function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var titulo = document.querySelector('h1#titulo')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if(hora >= 0 && hora < 12) {
        img.src = "fotomanha.png"
        titulo.innerHTML = 'Bom Dia!'
        document.body.style.background = '#EDD6AD'
    }

    else if(hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        titulo.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#A1B7CA'
    }

    else {
        img.src = 'fotonoite.png'
        titulo.innerHTML = 'Boa Noite!'
        document.body.style.background = '#082436'
    }
}