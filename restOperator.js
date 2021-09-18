const sum = (function() {
    return function sum(...args) // ... : rest operator - allows any number of arguments
    {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
let arr3;

(function(){
    arr2 = arr1;
    arr3 = [...arr1]; // copy only the contents
    arr1[0] = 'potato';
})();
console.log(arr2);
console.log(arr3);