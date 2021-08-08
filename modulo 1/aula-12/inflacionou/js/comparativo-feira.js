function tomate () {
    var valorAntigo = prompt("Digite o valor antigo: ")
    var valorAtual = prompt("Digite o valor atual: ")

    if (+valorAtual > +valorAntigo) {

        var valorDiferenca = valorAtual - valorAntigo;

        document.getElementById("tomate").innerHTML = `O tomate teve um aumento de: ${valorDiferenca}`;

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("tomate").innerHTML = `O tomate teve uma redução de: ${valorDiferenca}`;
        
    } else {
        document.getElementById("tomate").innerHTML = "O tomate não teve alteração de preço.";
    }
}

function laranja () {
    var valorAntigo = prompt("Digite o valor antigo: ")
    var valorAtual = prompt("Digite o valor atual: ")

    if (+valorAtual > +valorAntigo) {

        var valorDiferenca = valorAtual - valorAntigo;

        document.getElementById("laranja").innerHTML = `O tomate teve um aumento de: ${valorDiferenca}`;

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("laranja").innerHTML = `O tomate teve uma redução de: ${valorDiferenca}`;
        
    } else {
        document.getElementById("laranja").innerHTML = "O tomate não teve alteração de preço.";
    }
}

function abacaxi () {
    var valorAntigo = prompt("Digite o valor antigo: ")
    var valorAtual = prompt("Digite o valor atual: ")

    if (+valorAtual > +valorAntigo) {

        var valorDiferenca = valorAtual - valorAntigo;

        document.getElementById("abacaxi").innerHTML = `O tomate teve um aumento de: ${valorDiferenca}`;

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("abacaxi").innerHTML = `O tomate teve uma redução de: ${valorDiferenca}`;
        
    } else {
        document.getElementById("abacaxi").innerHTML = "O tomate não teve alteração de preço.";
    }
}

function limao () {
    var valorAntigo = prompt("Digite o valor antigo: ")
    var valorAtual = prompt("Digite o valor atual: ")

    if (+valorAtual > +valorAntigo) {

        var valorDiferenca = valorAtual - valorAntigo;

        document.getElementById("limao").innerHTML = `O tomate teve um aumento de: ${valorDiferenca}`;

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("limao").innerHTML = `O tomate teve uma redução de: ${valorDiferenca}`;
        
    } else {
        document.getElementById("limao").innerHTML = "O tomate não teve alteração de preço.";
    }
}

// function () {
//     var alimento = prompt("digita ae")
// var valorAntigo = prompt("Digite o valor antigo: ")
//     var valorAtual = prompt("Digite o valor atual: ")

//     if (alimento == "tomate" && valorAtual > valorAntigo) {

//         var valorDiferenca = valorAtual - valorAntigo;

//         alert( `O tomate teve um aumento de: ${valorDiferenca}`)

//     } else if (alimento == "tomate" && valorAntigo > valorAtual ) {

//         var valorDiferenca = valorAntigo - valorAtual;

//         alert( `O tomate teve um aumento de: ${valorDiferenca}`)
        
//     } else {
//         alert("Teve mudança não po")
//     }
// }

