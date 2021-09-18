const s = [5, 7, 2];

function editInPlace()
{
    "use strict";

    // s = [2, 5, 7];
    // can't re-assign. error

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

console.log(s);
editInPlace();
console.log(s);