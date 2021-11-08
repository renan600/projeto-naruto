var botao = window.document.querySelector('button#button')
botao.addEventListener('click', clicou)

function clicou(){
    var resultado = window.document.querySelector('p#resultado')
    var imagem = window.document.querySelector('img#imagem')
    var sasuke = window.document.getElementsByName('sasuke')

    if(sasuke[0].checked){
        resultado.innerHTML = ('Sasuke com 12 Anos')
        resultado.style.textShadow = ('0px 0px 8px black')  
        resultado.style.textAlign= ('center')
        resultado.style.fontWeight =('bold')
        imagem.src = ('sasuke12.png')
    }else if(sasuke[1].checked){
        resultado.innerHTML = ('Sasuke com 16 Anos')
        resultado.style.textShadow = ('0px 0px 8px black')  
        resultado.style.fontWeight =('bold')
        resultado.style.textAlign= ('center')
        imagem.src = ('sasuke16.png')
    }else if(sasuke[2].checked){
        resultado.innerHTML = ('Sasuke com 19 Anos')
        resultado.style.textShadow = ('0px 0px 8px black')  
        resultado.style.fontWeight =('bold')
        resultado.style.textAlign= ('center')
        imagem.src = ('sasuke19.png')
    }else if(sasuke[3].checked){
        resultado.innerHTML = ('Sasuke com 30 Anos')
        resultado.style.textShadow = ('0px 0px 8px black')  
        resultado.style.fontWeight =('bold')
        resultado.style.textAlign= ('center')
        imagem.src = ('sasuke30.png')
}
}


