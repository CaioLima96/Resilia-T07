function atrasado (str, callback) {
   setTimeout(() => {
       callback(str)
   }, 5000)
}

function palavra(str) {
    console.log(str)
}

function palavra2(str) {
    console.log(str)
    console.log('abc')
}

atrasado('Olá com delay de 5s', palavra2)

// setTimeout(() => {
//     console.log('Olá com delay de 5s')
// }, 5000)