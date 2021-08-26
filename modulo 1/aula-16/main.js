var nomeProd
var itens = []

function listaCarlos(qtdAlimento) {

    while (qtdAlimento > 0) {

        nomeProd = prompt("Digita seu alimento aí, esquisito")

        // var par = qtdAlimento % 2 == 0 

        if (nomeProd.length % 2) {
            itens.push(nomeProd)
            qtdAlimento--
        } else {
            alert("Errado, digita denovo ae")
        }
        
    }
    
    document.write(`<p>${itens}</p>`)

}

listaCarlos(prompt("Digite os itens, seu animal"))