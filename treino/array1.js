var nome = ['Antonio', 'Nunes']
console.log(nome[0], nome[5])

nome[2] = 'PAH!'
nome.push("abc")
console.log(nome)

nome[10] = 'Nooossaaa'
console.log(nome)

console.log(nome.length)

nome.push({id:3}, false, [1,2])
nome.unshift("teste")
console.log(nome)

var arr = ['caio', 'ana', 'luiz']
var arrRev = arr.reverse()
console.log(arrRev)
console.log(arrRev.sort())


var fruta = ['banana', 'maçã', 'pera']
var frutaRev = fruta.reverse()
console.log(frutaRev)
var frutaPop = frutaRev.pop()
console.log(frutaPop)
console.log(typeof fruta)
var frutaSort = frutaRev.sort()
console.log(frutaRev)