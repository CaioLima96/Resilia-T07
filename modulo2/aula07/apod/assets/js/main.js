const nasa = $.ajax({url: 'https://api.nasa.gov/planetary/apod?api_key=WgSfzp8CJwi22ZaHEHUyD4hBuVuiAfeKb6tHk7dB', async: false}).responseJSON

espaco.innerHTML = `
	<h1> ${nasa.title} </h1>
`

console.log(nasa)
