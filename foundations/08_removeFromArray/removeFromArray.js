const removeFromArray = function(arr, n, m, o, p) {
    return arr.filter(item => (item !== n) && (item !== m) && (item !== o) && (item !== p));
};

// Do not edit below this line
module.exports = removeFromArray;
