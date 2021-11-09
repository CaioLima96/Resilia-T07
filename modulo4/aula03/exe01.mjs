//const nodeFetch = require ('node-fetch')

import fetch from "node-fetch";


function geraUsuarios(userNum) {

    fetch(`https://randomuser.me/api/?results=${userNum}`).then((response) => {
        if (response.ok) {
            return response.json()
        }
    }).then(data => {console.log(data)})
    

    // return new Promise((resolve, reject) => {
    //     if (febril >= 37.5) {
    //         resolve('Paciente febril!')
    //     } else {
    //         reject('Paciente não-febril!')
    //     }
    // })
}

geraUsuarios(5)
