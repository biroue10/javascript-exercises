const reverseString = function(chaine) {
    let tableau=[]
    for(let i=chaine.length-1; i>=0; i--){
        tableau.push(chaine[i])
    }
    return (tableau.join(""))
};

// Do not edit below this line
module.exports = reverseString;
