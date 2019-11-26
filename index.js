// Code your solution here
function findMatching(drivers, s){
    return drivers.filter(driver => {
        return driver.toLowerCase() === s.toLowerCase();
    });
}

function fuzzyMatch(drivers, s){
    return drivers.filter(driver => {
        return driver.substring(0, s.length) === s;
    });
}

function matchName(drivers, s){
    return drivers.filter(driver => {
        return driver.name === s;
    })
}
