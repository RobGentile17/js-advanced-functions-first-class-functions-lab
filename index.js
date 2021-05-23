function returnFirstTwoDrivers(drivers) {
return drivers.slice(0,2) 
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(drivers.length - 2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareQuintupler) {
return function() {
return fareQuintupler * fareQuintupler
}
}
function fareDoubler (doubleFare) {
    return doubleFare * 2
}
function fareTripler (tripleFare) {
return tripleFare * 3
}
function selectDifferentDrivers (drivers , jelena) {
return jelena (drivers)
}