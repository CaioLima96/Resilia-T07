function listaDecrescente(maior) {

    while (maior > 0) {
        document.write(`<p>${maior}</p><br>`)
        console.log(maior)
        maior--
    }

}

listaDecrescente(prompt("digita um numero ae"))

function fizz(abc) {

    while (abc < 100) {
        if (abc % 3 == 0) {

            document.write(`fizz <br>`)
            
        } else {
            document.write(`${abc}<br>`)
        }

        abc++
    }
     
    
}

fizz(prompt("digita um numero ae"))

