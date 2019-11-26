// Code your solution here

function findMatching(drivers, name)
{
    return drivers.filter(driverName => {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letter)
{
    return drivers.filter(driverName => {
        return driverName.charAt(0)=== letter.charAt(0);
    });
}

function matchName(drivers, name)
{
    return drivers.filter(driverObj => {
        return driverObj["name"] === name;
    });
}