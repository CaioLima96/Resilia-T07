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

        document.getElementById("laranja").innerHTML = `A laranja teve um aumento de: R$ ${valorDiferenca}`;
        document.getElementById("laranja").style.marginTop = "10px";

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("laranja").innerHTML = `A laranja teve uma redução de: R$ ${valorDiferenca}`;
        document.getElementById("laranja").style.marginTop = "10px";
        
    } else {
        document.getElementById("laranja").innerHTML = "A laranja não teve alteração de preço.";
        document.getElementById("laranja").style.marginTop = "10px";
    }
}

function abacaxi () {
    var valorAntigo = prompt("Digite o valor antigo: ")
    var valorAtual = prompt("Digite o valor atual: ")

    if (+valorAtual > +valorAntigo) {

        var valorDiferenca = valorAtual - valorAntigo;

        document.getElementById("abacaxi").innerHTML = `O abacaxi teve um aumento de: R$ ${valorDiferenca}`;
        document.getElementById("abacaxiabacaxi").style.marginTop= "10px";

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("abacaxi").innerHTML = `O abacaxi teve uma redução de: R$ ${valorDiferenca}`;
        document.getElementById("abacaxi").style.marginTop = "10px";
        
    } else {
        document.getElementById("abacaxi").innerHTML = "O abacaxi não teve alteração de preço.";
        document.getElementById("abacaxi").style.marginTop = "10px";
    }
}

function limao () {
    var valorAntigo = prompt("Digite o valor antigo: ")
    var valorAtual = prompt("Digite o valor atual: ")

    if (+valorAtual > +valorAntigo) {

        var valorDiferenca = valorAtual - valorAntigo;

        document.getElementById("limao").innerHTML = `O limão teve um aumento de: R$ ${valorDiferenca}`;
        document.getElementById("limao").style.marginTop = "10px";

    } else if (+valorAntigo > +valorAtual ) {

        var valorDiferenca = valorAntigo - valorAtual;

        document.getElementById("limao").innerHTML = `O limão teve uma redução de: R$ ${valorDiferenca}`;
        document.getElementById("limao").style.marginTop = "10px";
        
    } else {
        document.getElementById("limao").innerHTML = "O limão não teve alteração de preço.";
        document.getElementById("limao").style.marginTop = "10px";
    }
}