function checkDivision(number) {
    let result = []
    for (i = 0; i <= number; i++) {
        if (number % i == false) {
            result.push(i)
        }
    }
    return result
}

// console.log(checkDivision(10))

// console.log(checkDivision(24))

// console.log(checkDivision(7))

function findMax(array) {
    let maximum = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i]
        }
    }
    return maximum
}

// console.log(findMax([5, 2, 9, 1, 7]))

// console.log(findMax([10, 22, 8, 17, 3]))

// console.log(findMax([-3, -8, -1, -5, -2]))

function sommeDesCarres(posNumber) {
    let somme = 0
    for (let i = 0; i <= posNumber; i++) {
        if (i === 0) {
            continue
        } else {
            somme = somme + (i * i)
        }
    }
    return somme
}

console.log(sommeDesCarres(3));

console.log(sommeDesCarres(5));

console.log(sommeDesCarres(0));
