var carro = {
    cor : "preto",
    tanqueMax : 42,
    tanqueAtual : 25,
    consumoMedio : 10,

    "getCor": function () {
        return this.cor
    },
    setCor: function (novaCor) {
        this.cor = novaCor 
    },

    // getTanqueAtual: function () {
    //     return this.tanqueAtual
    // },

    // setTanqueAtual: function (novoTanqueAtual) {
    //     this.tanqueAtual(novoTanqueAtual)
    // },

    // getTanqueMax: function () {
    //     return this.tanqueMax
    // },
    // setTanqueMax: function (novoMax) {
    //     this.tanqueMax(novoMax)
    // },

    // getConsumoMedio: function () {
    //     return this .consumoMedio
    // },
    // setConsumoMedio: function (novoConsumoMedio) {
    //     this.consumoMedio(novoConsumoMedio)
    // }
}