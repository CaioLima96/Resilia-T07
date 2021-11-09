function message(m){
    return new Promise((resolve, reject) => {
        if (m) {
            resolve("Ok, todos vivos na estação")
        } else {
            reject("Comunicação perdida")
        }
    })
}

function lostCom() {

    let m = false;

    if( Math.random() > 0.5) {
        m = true
    } else {
        m = false;
    }

    const communication = message(m)

    communication.then((resolved) => {
        console.log(`Sucesso: ${resolved}`)
    }).catch ( err => {
       console.log( `Falha: ${err}`)
    })
}

setTimeout(lostCom, 2.5 * 1000)