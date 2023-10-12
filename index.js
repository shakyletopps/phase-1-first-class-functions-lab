const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = names => {
return names.slice(0,2);
};

const returnLastTwoDrivers = names => {
    return names.slice(2);
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
};



function selectDifferentDrivers(drivers,names) {
    return names(drivers)
}