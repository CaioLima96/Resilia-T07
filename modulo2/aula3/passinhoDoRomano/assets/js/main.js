//ESCONDE-MOSTRA CAMPO INCREMENTO E BTNS CODE-DECODE

var cipherSelect = document.getElementById('cipherSelect')
cipherSelect.addEventListener('click', function() {

    if(cipherSelect.value == 'cifraDeCesar'){
        document.getElementById('chave').style.display = 'flex'

    } else {
        document.getElementById('chave').style.display = 'none'

    }   
})

function showCodeBtn() {
    let btn1 = document.getElementById('btnCode')
    let btn2 = document.getElementById('btnDecode')
    let ptextDecode = document.getElementById('firstLastP')
    let ptextCodefy = document.getElementById('SecondLastP')
    
    btn1.style.display = "inline-block"
    btn2.style.display = "none"
    ptextDecode.style.display = "block"
    ptextCodefy.style.display = "none"
}


function showDecodeBtn() {
    let btn1 = document.getElementById('btnCode')
    let btn2 = document.getElementById('btnDecode')
    let ptextCodefy = document.getElementById('SecondLastP')
    let ptextDecode = document.getElementById('firstLastP')
    

    btn1.style.display = "none"
    btn2.style.display = "inline-block"
    ptextCodefy.style.display = "block"
    ptextDecode.style.display = "none"
}


/*
==========================================
*/


//PEGAR AUTOMATICO DO TEXTAREA 1 PARA O TEXTAREA 2

// let areaTextInicio = document.getElementById('textoInicial')
// let areaTextFim = document.getElementById('textoFinal')

// areaTextInicio.addEventListener('keydown', () => {
//     let texto = document.getElementById('textoInicial').value
//     areaTextFim.innerText = texto
//     console.log('abc')
// })


/*
==========================================
*/


//CAESAR CIPHER

function caesarCipher(str, num) {

    num = num % 26

    var lowerCaseStr = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var newStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i]
        if (currentLetter === ' ') {
            newStr += currentLetter;
            continue;
        }

        var currentIndex = alphabet.indexOf(currentLetter)
        var newIndex = currentIndex + num

        if (newIndex > 25) {
            newIndex = newIndex - 26 

        } else if (newIndex < 0) {
            newIndex = newIndex + 26

        }
        
        if(str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase()
            
        } else {
            newStr += alphabet[newIndex]
            
        }

    }
    
    return newStr
}


//CODIFICA
document.getElementById('btnCode').addEventListener('click', function() {

    var inserirTextoCesar = document.getElementById('textoFinal')
    var str = document.getElementById('textoInicial').value
    var num = document.getElementById('incremento').value
    
    inserirTextoCesar.innerText = caesarCipher(str, num)
})

//DECODICA
document.getElementById('btnDecode').addEventListener('click', function() { 

    var inserirTextoCesar2 = document.getElementById('textoFinal')
    var str = document.getElementById('textoInicial').value
    var num = document.getElementById('incremento').value
    num *= -1

    
    inserirTextoCesar2.innerText = caesarCipher(str, num)
})


/*
==========================================
*/


//BASE 64

// //CODIFICA
// document.getElementById('btnCode').addEventListener('click', () => {

//     inserirTextoBase64 = document.getElementById('textoFinal')
//     inserirTextoBase64.innerText = btoa(document.getElementById('textoInicial').value)
// })

// //DECODIFICA
// document.getElementById('btnDecode').addEventListener('click', () => {

//     inserirTextoBase64dois = document.getElementById('textoFinal')
//     inserirTextoBase64dois.innerText = atob(document.getElementById('textoInicial').value)
// })