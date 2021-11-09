const chalk = require('chalk')

function temperaPaciente(febril) {
    return new Promise((resolve, reject) => {
        if (febril >= 37.5) {
            resolve('Paciente febril!')
        } else {
            reject('Paciente não-febril!')
        }
    })
}

setTimeout(() => {
    //febril = (35 + Math.random() * 7).toFixed(2);

    const communication = temperaPaciente(35)

    communication.then((resolved) => {
        console.log(chalk.red(`[ALERTA]: ${resolved}`))
    }).catch ( err => {
       console.log( chalk.green(`[INFO]: ${err}`))
    })
}, 1 * 1000)


// setTimeout(temperatura, 3 * 1000)

// function temperaPaciente(m){
//     return new Promise((resolve, reject) => {
//         if (m) {
//             resolve("Paciente")
//         } else {
//             reject("Paciente não-febril")
//         }
//     })
// }

// function lostCom() {

//     let m = false;

//     if( Math.random() > 0.5) {
//         m = true
//     } else {
//         m = false;
//     }

//     const communication = temperaPaciente(m)

//     communication.then((resolved) => {
//         console.log(chalk.red(`[ALERTA]: ${resolved}`))
//     }).catch ( err => {
//        console.log( chalk.green(`[INFO]: ${err}`))
//     })
// }

// setTimeout(lostCom, 3 * 1000)