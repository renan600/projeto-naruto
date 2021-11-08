var botao = window.document.querySelector('button#button')
botao.addEventListener('click', clicou)

function clicou(){

    var res = window.document.querySelector('p#resultado')
    var checked = window.document.getElementsByName('sakura')
    var imagem = window.document.querySelector('img#imagem')

    if(checked[0].checked){
        res.innerHTML = ('<p style="text-align:center; font-weight:bold; text-shadow:0px 0px 8px black;">Sakura com 12 anos</p>')
        imagem.src = ('sakura12.png')
    }else if(checked[1].checked){
        res.innerHTML = ('<p style="text-align:center; font-weight:bold; text-shadow:0px 0px 8px black;">Sakura com 16 anos</p>')
        imagem.src = ('sakura16.png')
    }else if(checked[2].checked){
        res.innerHTML = ('<p style="text-align:center; font-weight:bold; text-shadow:0px 0px 8px black;">Sakura com 19 anos</p>')
        imagem.src = ('sakura19.png')
    }else if(checked[3].checked){
        res.innerHTML = ('<p style="text-align:center; font-weight:bold; text-shadow:0px 0px 8px black;">Sakura com 30 anos</p>')
        imagem.src = ('sakura30.png')
    }
}
