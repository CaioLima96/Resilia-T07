function dirigirEBeber (idade) {
    
    if (idade > 18) {
        return(`Você tem ${idade}, já pode digigir`)
    } else {
        return(`Você não ${idade}, não pode digir`)
    }
        
}

dirigirEBeber (prompt("Digite sua idade")) 


function previsaoRodagem(litroGasosa, kmMediaLitro) {
    return("A estimativa é: " + (litroGasosa / kmMediaLitro)) 
}

previsaoRodagem (1, 10)
