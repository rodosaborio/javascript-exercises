const findTheOldest = function(array) {
    const getAge = (person) => {
        const deathOrToday = person.yearOfDeath === undefined ? new Date().getFullYear() : person.yearOfDeath;
        return deathOrToday - person.yearOfBirth;
    }
    return array.reduce((oldest, curr) => {
        return getAge(oldest) < getAge(curr) ? curr : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
