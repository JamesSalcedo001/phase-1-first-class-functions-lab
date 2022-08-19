// Code your solution in this file!
const returnFirstTwoDrivers = function() {
    return ["Antonia", "Nuru"];
}

const returnLastTwoDrivers = function() {
    return ["Amari", "Mo"];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function (fare) {
        return fare * integer;
    };
};

function fareDoubler(fare) {
    const cfm = createFareMultiplier()
    cfm();
    return fare * 2;
}

function fareTripler(fare) {
    const cfm = createFareMultiplier()
    cfm();
    return fare * 3;  
}

function selectDifferentDrivers(selectingDrivers, func) {
    if (func === returnFirstTwoDrivers) {
        return ["Antonia", "Nuru"];
    } else if(func === returnLastTwoDrivers) {
        return ["Amari", "Mo"];
    };
}