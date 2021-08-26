var texto = document.getElementById("abc")

function abre() {
  // var texto = document.querySelector("#abc")
  texto.innerText = "Estamos Abridos!"
}


function fecha() {
    // let texto2 =  document.getElementById("abc").innerHTML = `Estamos fechados`

    // return texto2
    
    // var texto2 = document.querySelector("#abc")
    
    if (texto.innerText === "Estamos Abridos!"){
      // texto.remove();
      texto.innerText = "Estamos Fechados!"
    } //else { 
    //   texto.innerText = "Estamos Fechados!"
      
}


