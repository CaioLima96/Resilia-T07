var incrementar = document.querySelector('.incrementoField')
document.querySelector('#caio').addEventListener('click', function() {
    incrementar.classList.toggle('incrementoFlex')
    console.log("aaaa")
})


/*
==========================================
*/

//ESCONDE-MOSTRA CAMPO INCREMENTO E BTNS CODE-DECODE

var cipherSelect = document.getElementById('cipherSelect')
cipherSelect.addEventListener('click', function() {
    if(cipherSelect.value == 'cifraDeCesar'){
        document.getElementById('chave').style.display = 'flex'
        console.log('bbbb')
    } else {
        document.getElementById('chave').style.display = 'none'
        console.log('cccc')
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

    console.log(str)

    for(var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i]
        if (currentLetter === ' ') {
            newStr += currentLetter;
            console.log('jjjj')
            continue;
        }

        var currentIndex = alphabet.indexOf(currentLetter)
        var newIndex = currentIndex + num

        if (newIndex > 25) {
            newIndex = newIndex - 26 
            console.log('pppp')
        } else if (newIndex < 0) {
            newIndex = newIndex + 26
            console.log('vvvvv')
        }
        
        if(str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase()
            console.log('nnnn')
        } else {
            newStr += alphabet[newIndex]
            console.log('kkkk')
        }

    }
    
    console.log(newStr)
    return newStr
}

document.getElementById('btnCode').addEventListener('click', function() {
    var inserirTexto = document.getElementById('textoFinal')
    console.log('coca-cola')

    var str = document.getElementById('textoInicial').value
    var num = document.getElementById('incremento').value

    
    inserirTexto.innerText = caesarCipher(str, num)
})

document.getElementById('btnDecode').addEventListener('click', function() {
    var inserirTexto = document.getElementById('textoFinal')
    console.log('flexa')
    
    var str = document.getElementById('textoInicial').value
    var num = document.getElementById('incremento').value
    num *= -1

    
    inserirTexto.innerText = caesarCipher(str, num)
})



//BASE 64


/*
==========================================
*/


// function caesarCipher() {

//     var str = document.getElementById('textoInicial').value
//     var num = document.getElementById('incremento').value
//     num = num % 26

//     var lowerCaseStr = str.toLowerCase();
//     var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     var newStr = '';

//     console.log(str)

//     for(var i = 0; i < lowerCaseStr.length; i++) {
//         var currentLetter = lowerCaseStr[i]
//         if (currentLetter === ' ') {
//             newStr += currentLetter;
//             console.log('jjjj')
//             continue;
//         }

//         var currentIndex = alphabet.indexOf(currentLetter)
//         var newIndex = currentIndex + num

//         if (newIndex > 25) {
//             newIndex = newIndex - 26 
//             console.log('pppp')
//         } else if (newIndex < 0) {
//             newIndex = newIndex + 26
//             console.log('vvvvv')
//         }
        
//         if(str[i] === str[i].toUpperCase()) {
//             newStr += alphabet[newIndex].toUpperCase()
//             console.log('nnnn')
//         } else {
//             newStr += alphabet[newIndex]
//             console.log('kkkk')
//         }

//     }
    
//     console.log(newStr)
//     return newStr
// }



// let chave = +document.getElementById('#incremento').value