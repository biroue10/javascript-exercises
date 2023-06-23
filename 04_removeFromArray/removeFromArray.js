const removeFromArray = function(chaine, number) {
    let index = chaine.indexOf(number)
    let result = chaine.splice(index, 1)
    return chaine
};

// Do not edit below this line
module.exports = removeFromArray;
