const sumAll = function(a,b) {
    if((a < 0) || (b < 0) || ((a*10)%10 !== 0) || ((b*10)%10 !== 0) || (typeof(a) !== typeof(b))){
        return 'ERROR'
    }

    let sum = 0;
    let i;
    let j;

    if(a<b){
        i = a;
        j = b;
    } else {
        i = b;
        j = a;
    }

    for (let k = i; k <= j; k++) {
        sum += k;
    }

    return sum;
};

/*OR

const sumAll = function(a,b){
if( (a < 0) || (b < 0)  || 
    !Number.isInteger(a) || !Number.isInteger(b) || 
    typeof(a) !== 'number' || typeof(b) !== 'number'
    )

    const min = Math.min(a,b);
    const max = Math.max(a,b);

    let sum = 0;
    for(i = min; i <= max; i++) {
    sum += i}

    return sum;

    OR

    Arithmetic Progression (Gauss sum)
    the formula is: (count of numbers) * (first + last) / 2
    return (max - min + 1) * (min + max) / 2  // here gemini said that in PEDMAS add and sub have the same level and so when you have just add and sub, you go from left to right, tho the model was 3.1 flash, so you might wanna recheck, am too tired and lazy to check now
}
*/

// Do not edit below this line
module.exports = sumAll;
