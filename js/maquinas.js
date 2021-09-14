function dolcePiccolo (){
    var maquina = document.querySelector('div#maquina')
    maquina.innerHTML= ''

    var preco = document.querySelector('div#preco')
    preco.innerHTML = 'R$ 300,00' // aparece o preço na tela

    var img = document.createElement('img') // cria a tag img
    img.setAttribute('src', 'img/Dulce_GustoP.jpg')
    maquina.appendChild(img)
}

function nespressoInissia (){
    var maquina = document.querySelector('div#maquina')
    maquina.innerHTML= ''

    var preco = document.querySelector('div#preco')
    preco.innerHTML = 'R$ 300,00' // aparece o preço na tela

    var img = document.createElement('img') // cria a tag img
    img.setAttribute('src', 'img/Nespresso_InissiaP.jpg')
    maquina.appendChild(img)

}

function nespressoUC (){
    var maquina = document.querySelector('div#maquina')
    maquina.innerHTML= ''

    var preco = document.querySelector('div#preco')
    preco.innerHTML = 'R$ 400,00' // aparece o preço na tela

    var img = document.createElement('img') // cria a tag img
    img.setAttribute('src', 'img/Nespresso_C50P.jpg')
    maquina.appendChild(img)
}

function senseoHD (){
    var maquina = document.querySelector('div#maquina')
    maquina.innerHTML= ''

    var preco = document.querySelector('div#preco')
    preco.innerHTML = 'R$ 230,00' // aparece o preço na tela

    var img = document.createElement('img') // cria a tag img
    img.setAttribute('src', 'img/SenseoP.jpg')
    maquina.appendChild(img)
    
}