var incrementar = document.querySelector('.incrementoField')
document.querySelector('#caio').addEventListener('click', function() {
    incrementar.classList.toggle('incrementoNone')
    console.log("aaaa")
})


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


// let areaText = document.getElementById('#inicialMenssagem').value
// let chave = +document.getElementById('#incremento').value
// let areaTextSplit = areaText.split('')










// let incrementando = document.querySelector('.incrementoField')
// document.querySelector('#btnCesar').addEventListener('click', () => {
//     incrementando.classList.toggle('incrementoNone')
//     console.log("bbb")
// })





// var incrementar = document.querySelector('.incrementoField')
// var cifraSelec = document.querySelector('#codificacao').cifraDeCesar

// cifraSelec.addEventListener('click', function() {
//     incrementar.classList.toggle('incrementoNone')
//     console.log("aaaa")
// })


// var rad = document.getElementsByClassName('CrifraSelec').document.getElementsByName('cesar').value('')

// function hideIncremento() {

//     // if (incrementar.style.display === "none") {
//     //     incrementar.style.display = "flex"
//     // } else {
//     //     incrementar.style.display = "none"
//     // }

// }