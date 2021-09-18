const [z, x] = [1, 2, 3, 4, 5, 6];
console.log(z, x);

const [a, b,  , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

let d = 8, e = 6;
(() => {
    "use strict";
    [d, e] = [e, d];
})();

console.log(d, e);