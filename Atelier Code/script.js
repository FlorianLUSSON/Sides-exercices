let array = [4, 4, 3, 3, 1, 0]
let test = ["Coucou", "bonjour"]


// function rank(array) {
//     let number = 0
//     for (let i = 0; i < array.length; i++) {
//         if (array.includes(array[i] + 1)) {
//             number++
//         } else {
//         }
//     }
//     return number
// }


function rank(array) {
    let number = 0
    let nbSoldat = 0
    array.sort()
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i + 1]) {
            nbSoldat++
            console.log("Soldat de meme classe")
        } else if (array[i] + 1 == array[i + 1]) {
            nbSoldat++
            number += nbSoldat
            nbSoldat = 0
            console.log("Fait son rapport")
        } else {
            nbSoldat = 0
            console.log("Est le superieur")
        }
    }
    return number
}


console.log(array)
console.log(rank(array))