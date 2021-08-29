var cao = {
    tipo: 'ficha',
    definirNome: prompt('Digite o nome do cão.'),
    definirIdade: prompt('Digite a idade do cão.'),
    som: 'miau'
}

var miado = document.querySelector('#texto')
miado.addEventListener('click', function () {
    var createP = document.createElement('p')
    createP.innerText = `${cao.som}`
    miado.appendChild(createP)
    console.log("aaaaaaaaaaaa")
})

function latido() {
    alert("A porra do cachorro latiu, miau!")
    texto.innerText = "O cão latiu, miau!"
}

function comido() {
    alert("O cão comeu.")
    texto.innerText = "O cão comeu, miau"
}

function objDog() {
    alert(`${cao}`)
    texto.innerText = `O obj é: ${cao.tipo}`
    console.log(cao)
}