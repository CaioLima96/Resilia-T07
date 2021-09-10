class Fila {
    constructor(itenFila) {
        this.arr = [itenFila]
    }

    chegada(...itenFila) {
        // for(let i = 0; i < itenFila.length; i++){
        //     this.arr.push(itenFila[i])
        // } 
        this.arr = [...this.arr, ...itenFila]
    }

    partida() {
        try {
            
            if(novaFila.arr == 0){
                throw new Error ('Fila vazia!')
            }else if(novaFila.arr < 0) {
                throw new Error ('Fila negativa')
            }else {
                return this.arr.shift()
            }

        } catch (error) {
            console.log('Fila vazia, não foi possivel retirar o item')
            console.log(error)
        }
    }


    mostraFila() {

        document.querySelector('body').innerHTML += `<p>${this.arr}</p>`
        console.log(this.arr)

        for(let i =0; i < this.arr.length; i++) {
           var newArr = document.querySelector('body').innerHTML += `<p>${this.arr[i]}</p>`
           console.log(this.arr[i])
           
        }
        return newArr

         

        
        
    }

}

const novaFila = new Fila('arroz')