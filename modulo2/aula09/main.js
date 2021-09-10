class Pilha {
    constructor(itenPilha) {
        this.arr = [itenPilha];
    }

    empilha(item) {
       this.arr.push(item)
    }

    desempilha() {
       
        try {

            if(novaPilha.arr == 0) {
                throw new Error("ZERO itens na pilha")
            } else if (novaPilha.arr < 0) {
                throw new Error("Pilha negativa")
            } else {
                return this.arr.pop()//tratar aqui
            }
        } catch (error) {
            console.log('[ERRO]Pilha vazia, não foi possível desempilhar.')
            console.log(error)
        }       
    } 

    mostraPilha() {
        document.querySelector('body').innerHTML = `<p>${this.arr}</p><br>`
        console.log(this.arr)
    }
}



let novaPilha = new Pilha('maçã')




