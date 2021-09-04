class Gato {
    constructor(nome, idade, sexo) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;

    }

    miar(){
        console.log(`${this.nome} está miando! AuAu!`)
    }
    comer() {
        console.log(`Deu fome! ${this.nome} está comendo! Chomp chomp!`)
    }
}

const amelie = new Gato ('Amelie', 5, 'F')

const tom = new Gato('Tom', 5, 'M')