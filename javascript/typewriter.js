
typeWriter = (elemento, frase) => {
    //cria um array com cada caracter passado em elemento
    const textoArray = frase.split('');
    
    //zerar o elemento innerhtml
    elemento.innerHTML = ''

    textoArray.forEach((letra, i) => {
        
        setTimeout(()=> {
            elemento.innerHTML += letra;
        }, 150 * i);
    
    });
}
/**
 * 
 * 
 */