const btnSubimit = document.querySelector('#btnSubmit').addEventListener('click', (event) => {
    event.preventDefault()

    let dataValue = document.getElementById('data')

    let nasaApi = $.ajax({url: `https://api.nasa.gov/planetary/apod?api_key=WgSfzp8CJwi22ZaHEHUyD4hBuVuiAfeKb6tHk7dB&date=${dataValue.value}`, async: false}).responseJSON
    
    if(nasaApi.code == 400) {

        mainContent.innerHTML = `
        <h1>Selecine uma data entre 2000 e a atual. Vemos o espaço, mas não o futuro para tirar foto do amanhã. :)</h1>
        `

    } else {

        mainContent.innerHTML = `
        
        

        <div id="nasa-content">
            <div>
                <img id="nasa-img" src="${nasaApi.url}" alt="${nasaApi.title}">
            </div>
            
            <div>
                <h3> ${nasaApi.title ? nasaApi.title : 'There is no title'} </h3>
                <p style="margin: 1rem 0; line-height: 1.5;">${nasaApi.explanation}</p>
                <p>Image credits & copyright: ${nasaApi.copyright ? nasaApi.copyright : 'unknown author'}</p>
            </div>
        </div>
        
        `
        console.log(nasaApi)
    }

    
})






