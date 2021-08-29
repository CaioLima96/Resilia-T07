//var, let, const
var pedido = 'Karlla'

//function
function atendente() {
    //variavel local
    var mensagem = 'foi feito!'


    console.log(`${pedido}, seu pedido ${mensagem}`)

    FeedBack(mensagem)
}

//chamando a função
atendente()

function FeedBack(quantidade) {

    while(quantidade != 'a' && quantidade != 'b') {
        console.log('errooou')
        break
    }

    if (quantidade === 'a') {

    } else {

    }
}

var arr = [['g', 'f', 'h'], 'n', 'b', 'a', 'z']

for (var i = 0; i < arr.length; i++){

    // var subIndex = 0

    console.log(arr[i]) 
}