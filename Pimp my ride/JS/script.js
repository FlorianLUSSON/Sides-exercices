let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

function parseTrip(trip) {
	let vol = trip.split(" ")
    let planning = {
        client: vol.shift(),
        start: parseInt(vol.shift()),
        duration: parseInt(vol.shift()),
        price: parseInt(vol.shift())
    }
    return planning
}

function parseTrips(trips){
    let array = []
    for(i=0;i<trips.length;i++){
        array.push(parseTrip(trips[i]))
    }
    return array
}

function getTripsPrice(voyages){
    let totalPrice = 0
    for(i=0;i<voyages.length;i++){
        totalPrice += parseInt(voyages[i].price)
    }
    return totalPrice
}

function checkCompatibility(tripA, tripB){
    if(parseInt(tripA.start) < parseInt(tripB.start)){
        let tripEnd = parseInt(tripA.start) + parseInt(tripA.duration)
        if(tripEnd<tripB.start){
            return true
        }else return false
    }else {
        return checkCompatibility(tripB,tripA)
    }
}


function findCompatibilities(trips){
    let tripCompatible = []
    for(i=0;i<trips.length;i++){
        for(j=0;j<trips.length;j++){
            if(trips[i] == trips[j]){
                tripCompatible.push([trips[i]])
            } else if(checkCompatibility(trips[i],trips[j])){
                tripCompatible.push([trips[i],trips[j]])
            }
        }
    }
    return tripCompatible
}

// function findBestPrice(trips){
//     let tripCompatible = findCompatibilities(trips)
//     let bestTrip = tripCompatible[0]
//     for(i=0;i<tripCompatible.length;i++){
//         for(j=0;j<tripCompatible.length;j++){
//             if(getTripsPrice(tripCompatible[j])<getTripsPrice(tripCompatible[j+1])){
//                 bestTrip = tripCompatible[i]
//             }
//         }
//     }
//     return bestTrip
// }

let liste = parseTrips(tripsToParse)
parseTrips(tripsToParse)
checkCompatibility(liste[0],liste[2])
console.log(findCompatibilities(liste))

