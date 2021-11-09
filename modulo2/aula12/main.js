

function operacoesArit(nOp) {
    const numbers = Array(nOp);
    const results = numbers.map( (el) => { Math.floor(Math.random() * 10000000) } );
}



const btnSubmit = document.getElementById('submit').addEventListener('click', (evento) => {
    evento.preventDefault()
    const dataAntiga = new Date()
    const inputValue = $("#pk-name").val()
    operacoesArit(inputValue)

    const dataNova = new Date()


    console.log(dataAntiga - dataNova)
    console.log(inputValue)
    console.log('a')
})


