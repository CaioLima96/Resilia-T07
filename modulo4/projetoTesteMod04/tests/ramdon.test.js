function par(a) {
    return a % 2 == 0 ? true : false
}

// function impar(b) {
//     // if (b % 2 == 0) {
//     //     return false
//     // }
//     return b % 2 == 1 ? true : false
// }

test("Deve retornar true, caso o numero passado seja par", () => {
    expect(par(3)).toBe(false)
})

test("Deve retornar true, caso o numero passado seja par", () => {
    expect(par(4)).toBe(true)
})
// test("Deve retornar false, caso o numero passado seja impar", () => {
//     expect(impar(3)).toBe(false)
// })