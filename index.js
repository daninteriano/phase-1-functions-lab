// Code your solution in this file
let headQuarters = 42;
function distanceFromHqInBlocks(street){
    if (street < headQuarters){
        return headQuarters - street;
    } else if (street > headQuarters){
        return street - headQuarters
    }
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264
}

distanceFromHqInFeet(50);

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        let summary = start - destination
        return summary * 264
    } else if (destination > start){
        let sumary = destination- start
        return sumary * 264
    }
}


function calculatesFarePrice(start, destination){
    let sum = distanceTravelledInFeet(start, destination)
   if (sum < 400){
        console.log("Free Ride!")
        return 0;
   } else if (sum > 400 && sum < 2000){
       return (sum - 400) * 0.02
   } else if (sum > 2000 && sum < 2500){
       return 25;
   } else if (sum > 2500){
       return"cannot travel that far"
   }
}
