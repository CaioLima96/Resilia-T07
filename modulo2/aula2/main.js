function createDiv() {
    var mainDiv = document.querySelector('#abc')
    var createMainDiv = document.createElement('div')
    createMainDiv.id = "caio"
    mainDiv.append(createMainDiv)

    createMainDiv.addEventListener('click', function() {
       createMainDiv.classList.toggle('coluna')
    })


}

function subDiv() {
    var subDivs = document.querySelector('div')
    var createSubDivs = document.createElement('div')
    subDivs.appendChild(createSubDivs)
}