function findMatching(drivers, string) {
    return drivers.filter(n => {
        n  = n.toUpperCase()
        string = string.toUpperCase()
        return n === string
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(n => {
        return n.startsWith(string)
    })    
}

function matchName(drivers, string) {
    return drivers.filter(n => {
        return n["name"] === string
    })
}