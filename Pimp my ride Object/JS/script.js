class Trip {
    constructor(name, start, duration, price) {
        this.name = name;
        this.start = start;
        this.duration = duration;
        this.price = price;
    }

    get end() {
        return parseInt(this.start) + parseInt(this.duration)
    }

    isCompatible(trip) {
        if (this.end - trip.start > 0 && (trip.start + trip.duration) - this.start > 0) {
            return false
        } else {
            return true
        }
    }
}

let tab = [
    "Roger 0 5 10",
    "Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7"
]

function parseTrip(tab) {
    let voyage = []
    for (let i = 0; i < tab.length; i++) {
        let vol = tab[i].split(" ")
        let name = vol[0]
        let start = vol[1]
        let duration = vol[2]
        let price = vol[3]
        let travel = new Trip(name, start, duration, price)
        voyage.push(travel)
    }
    return voyage
}

function estContenu(tableauPrincipal, sousTableau) {
    const chaineTableauPrincipal = JSON.stringify(tableauPrincipal);
    const chaineSousTableau = JSON.stringify(sousTableau);
    return chaineTableauPrincipal.includes(chaineSousTableau);
}

function checkCompatibilities(array) {
    let Compatible = []
    for (let i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                Compatible.push(array[j])
            } else if (array[i].isCompatible(array[j])) {
                let check = [array[i], array[j]]
                if (estContenu(Compatible, check)) {
                    continue
                } else {
                    Compatible.push([array[j], array[i]])
                }
            }
        }
    }
    return Compatible
}

function findBestPrice(trips) {
    let compatibilities = checkCompatibilities(trips);
    let bestPrice = -Infinity;
    let bestTrip = null;

    for (let i = 0; i < compatibilities.length; i++) {
        let currentPrice = 0;
        let currentTrip = [];

        for (let j = 0; j < compatibilities[i].length; j++) {
            let trip = compatibilities[i][j];
            currentPrice += parseFloat(trip.price);
            currentTrip.push(trip);
        }

        if (currentPrice > bestPrice) {
            bestPrice = currentPrice;
            bestTrip = currentTrip;
        }
    }

    console.log("Best Price:", bestPrice);
    console.log("Best Trip:", bestTrip);
}

let trips = parseTrip(tab)
checkCompatibilities(trips)
findBestPrice(trips)