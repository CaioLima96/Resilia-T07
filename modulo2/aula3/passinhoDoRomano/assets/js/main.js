var incrementar = document.querySelector('.incrementoField')
document.querySelector('#caio').addEventListener('click', function() {
    incrementar.classList.toggle('incrementoFlex')
    console.log("aaaa")
})


/*
==========================================
*/


var cipherSelect = document.getElementById('cipherSelect')
cipherSelect.addEventListener('click', function() {
    if(cipherSelect.value == 'cifraDeCesar'){
        document.getElementById('chave').style.display = 'flex'
        console.log('ddd')
    } else {
        document.getElementById('chave').style.display = 'none'
        console.log('eee')
    }   
})

function showCodeBtn() {
    let btn1 = document.getElementById('btnCode')
    let btn2 = document.getElementById('btnDecode')
    btn1.style.display = "inline-block"
    btn2.style.display = "none"
}


function showDecodeBtn() {
    let btn1 = document.getElementById('btnCode')
    let btn2 = document.getElementById('btnDecode')
    btn1.style.display = "none"
    btn2.style.display = "inline-block"
}



/*
==========================================
*/


let areaTextInicio = document.getElementById('textoInicial')
let areaTextFim = document.getElementById('textoFinal')

areaTextInicio.addEventListener('keydown', () => {
    let texto = document.getElementById('textoInicial').value
    areaTextFim.innerText = texto
    console.log('abc')
})





// var cipherSelect = document.getElementById('cipherSelect')
// cipherSelect.addEventListener('click', function() {
//     if(cipherSelect.value == 'cifraDeCesar'){
//         document.getElementsByClassName('incrementoField').style.display = 'flex'
//         console.log('ddd')
//     } else {
//         document.getElementsByClassName('incrementoField').style.display = 'none'
//         console.log('eee')
//     }   
// })

/*
==========================================
*/


// areaText.addEventListener('keydown'), () => {
//     var 
// }


// let chave = +document.getElementById('#incremento').value
// let areaTextSplit = areaText.split('')