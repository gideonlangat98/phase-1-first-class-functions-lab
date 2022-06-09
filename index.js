// Code your solution in this file!
//first two drivers
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers () {
    const newDrivers = [...drivers.slice(0,2)]
    return newDrivers;
}

//last two drivers
function returnLastTwoDrivers(){
    const lastTwoDrivers = [...drivers.slice(-2)]
    return lastTwoDrivers;
}

//selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//fare multiplier
let multiplier = 4;
let fareMultiplier = 4;
const createFareMultiplier = (fareMultiplier) => {
    return function (multiplier){
        return fareMultiplier * multiplier;
    }
}

//multiplies and tripples fare
let multiplier1 = 10;
let tripler = 12;
const fareDoubler = multiplier1 => multiplier1 * 2;

const fareTripler = tripler => tripler * 3;

//select different drivers from an array
function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}







