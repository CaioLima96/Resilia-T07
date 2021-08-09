function tomate () {
    var valorAntigo = prompt("Digite o valor antigo: ")
    var valorAtual = prompt("Digite o valor atual: ")

    if (+valorAtual > +valorAntigo) {

        var valorDiferenca = valorAtual - valorAntigo;

        document.getElementById("tomate").innerHTML = `O tomate teve um aumento de: R$ ${valorDiferenca}`;
        document.getElementById("tomate").style.marginTop = "10px";

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("tomate").innerHTML = `O tomate teve uma redução de: R$ ${valorDiferenca}`;
        document.getElementById("tomate").style.marginTop = "10px";
        
    } else{
        document.getElementById("tomate").innerHTML = "O tomate não teve alteração de preço.";
        document.getElementById("tomate").style.marginTop = "10px";
    }
}

function laranja () {
    var valorAntigo = prompt("Digite o valor antigo: ")
    var valorAtual = prompt("Digite o valor atual: ")

    if (+valorAtual > +valorAntigo) {

        var valorDiferenca = valorAtual - valorAntigo;

        document.getElementById("laranja").innerHTML = `O tomate teve um aumento de:R$ ${valorDiferenca}`;

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("laranja").innerHTML = `O tomate teve uma redução de:R$ ${valorDiferenca}`;
        
    } else {
        document.getElementById("laranja").innerHTML = "O tomate não teve alteração de preço.";
    }
}

function abacaxi () {
    var valorAntigo = prompt("Digite o valor antigo: ")
    var valorAtual = prompt("Digite o valor atual: ")

    if (+valorAtual > +valorAntigo) {

        var valorDiferenca = valorAtual - valorAntigo;

        document.getElementById("abacaxi").innerHTML = `O tomate teve um aumento de:R$ ${valorDiferenca}`;

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("abacaxi").innerHTML = `O tomate teve uma redução de:R$ ${valorDiferenca}`;
        
    } else {
        document.getElementById("abacaxi").innerHTML = "O tomate não teve alteração de preço.";
    }
}

function limao () {
    var valorAntigo = prompt("Digite o valor antigo: ")
    var valorAtual = prompt("Digite o valor atual: ")

    if (+valorAtual > +valorAntigo) {

        var valorDiferenca = valorAtual - valorAntigo;

        document.getElementById("limao").innerHTML = `O tomate teve um aumento de:R$ ${valorDiferenca}`;

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("limao").innerHTML = `O tomate teve uma redução de:R$ ${valorDiferenca}`;
        
    } else {
        document.getElementById("limao").innerHTML = "O tomate não teve alteração de preço.";
    }
}