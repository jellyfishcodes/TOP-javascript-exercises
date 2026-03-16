const repeatString = function(str,num) {
    let str1 = '';

    for(i = 0; i< num; i++){

        if(num == 1){str1 = str; break;}

        str1 += str;
    }

    if(num < 0){str1 = 'ERROR'};

    return str1;
};

repeatString('hey',3);

repeatString('hello',10);

repeatString('hi', 1);

repeatString('bye', 0);

repeatString('hey', 2);

repeatString("don't use the built-in repeat method!", 1);

repeatString('goodbye', -1);

repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
