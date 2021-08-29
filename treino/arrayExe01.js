// var arr = [25, 10]
// console.log(arr.sort(function(a, b){return a - b}))


// function numSort(arrr) {
    
//    var abc = arrr.sort(function(a, b) {return a - b})
   
//    console.log(abc)
//    return abc
// }

// numSort([25, 10, 75])

function numSort2 (numerosQtd) {
    var arr = []

    while(numerosQtd > 0) {

        var arrNum = prompt("Digite um numero")
        arr.push(arrNum)

        numerosQtd--
    }
    
    
    return arr.sort(function (a, b) {return b - a})
}

numSort2(prompt('Quantos numeros deseja por no array?'))

    
