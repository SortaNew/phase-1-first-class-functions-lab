// Code your solution in this file!
const returnFirstTwoDrivers = (firstTwo) => {
    const newFirstTwo = firstTwo.slice(0, 2);
    return newFirstTwo;
}

const returnLastTwoDrivers = (lastTwo) => {
    const newLastTwo = lastTwo.slice(lastTwo.length-2);
    return newLastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return fare => fare*num; 
}

function fareDoubler(doubleThis){
    const doubled = createFareMultiplier(2)(doubleThis);
    return doubled;
}

function fareTripler(tripleThis){
    const tripled = createFareMultiplier(3)(tripleThis);
    return tripled;
}

function selectDifferentDrivers(drivers, firstOrLast){
    if (firstOrLast === returnFirstTwoDrivers)
        return returnFirstTwoDrivers(drivers);
    else if (firstOrLast === returnLastTwoDrivers)
        return returnLastTwoDrivers(drivers);
}
