// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, match) {
  return drivers.filter(function(driver) {
    return driver.slice(0, match.length) === match;
  });
}

function matchName(drivers, name) {
    return drivers.filter(function(driver){
        return driver.name === name;
    });
}
