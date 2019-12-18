findMatching = (drivers, string) => {
    return drivers.filter(driver =>
        driver.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => 
        driver.toLowerCase()
        .indexOf(string.toLowerCase()) === 0)
}

function matchName(source, soughtName) {
    return source.filter( record => record.name === soughtName)
  }