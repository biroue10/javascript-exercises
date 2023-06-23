const repeatString = function(chaine, time) {
    let tableau = []
    for(let i=0; i<time; i++){
    tableau[i]=chaine
    }
    return tableau.join("")
};
// Do not edit below this line
module.exports = repeatString;
