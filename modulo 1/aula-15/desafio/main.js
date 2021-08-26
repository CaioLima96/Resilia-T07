// function nomeProd (npd) {
//     document.write(`${npd}<br>`)
// }

// nomeProd(prompt("AAAAAAAAAAAAAAAAAAAAAA"))

// function quantidadeProd (qpd) {

//     while (qpd > 0) {
//         document.write(`${qpd}<br>`)
//         qpd--
//     }
// }

// quantidadeProd(prompt("BBBBBBBBBBBBBBBBBBBBBB"))



var nomeProd

function lista(quantidadeProd) {
    document.write(`<ul style="list-style: none; background-color: grey; max-width: 500px; width: 80%; margin: 0 auto">`)

    while (quantidadeProd > 0) {
        nomeProd = prompt("Digita um produto ae seu corno")
        document.write(`<li style="font-size: 50px">${nomeProd}</li>`)
        quantidadeProd--
    }

    document.write(`</ul>`)
}

lista(prompt("Digita um ae seu merda"))

// Com base nos conteúdos cobertos conseguimos começar a construir página mais dinâmicas!
// Nesse desafio uma lista de compras deve ser exibida após o usuário entrar com as informações.
// Sua aplicação deve:
// Receber a quantidade de itens que o usuário deseja adicionar à lista
// Receber todos os itens que devem ser adicionados à lista (utilize uma estrutura de repetição)
// Exibir a lista fornecida na página web utilizando as estruturas HTML pertinentes
