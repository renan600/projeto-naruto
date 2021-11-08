var botao = window.document.querySelector('button#button')
botao.addEventListener('click', clicou)

function clicou(){
    var resultado = window.document.querySelector('p#resultado')
    var imagem = window.document.querySelector('img#imagem')
    var naruto = window.document.getElementsByName('naruto')

    if(naruto[0].checked){
        resultado.innerHTML = ('Naruto com 12 Anos')
        resultado.style.textShadow = ('0px 0px 8px black')  
        resultado.style.textAlign= ('center')
        resultado.style.fontWeight =('bold')
        imagem.src = ('naruto12.png')
    }else if(naruto[1].checked){
        resultado.innerHTML = ('Naruto com 16 Anos')
        resultado.style.textShadow = ('0px 0px 8px black')  
        resultado.style.fontWeight =('bold')
        resultado.style.textAlign= ('center')
        imagem.src = ('naruto16.png')
    }else if(naruto[2].checked){
        resultado.innerHTML = ('Naruto com 19 Anos')
        resultado.style.textShadow = ('0px 0px 8px black')  
        resultado.style.fontWeight =('bold')
        resultado.style.textAlign= ('center')
        imagem.src = ('naruto19.png')
    }else if(naruto[3].checked){
        resultado.innerHTML = ('Naruto com 30 Anos')
        resultado.style.textShadow = ('0px 0px 8px black')  
        resultado.style.fontWeight =('bold')
        resultado.style.textAlign= ('center')
        imagem.src = ('naruto30.png')
}
}
