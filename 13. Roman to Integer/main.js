const romanToInt = function(s) {
    const romanNumerals = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
    
    let res = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currValue = romanNumerals[s[i]];
        if (currValue >= prevValue) {
            res += currValue;
        } else {
            res -= currValue;
        }
        prevValue = currValue;
    }

    return res;
};