const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list)
{
    const [a, b ,,, ...arr] = list;
    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -8.75,
    average: 35.85
};

const half = (function() {
    return function half({max, min})
    {
        return (stats.max + stats.min) / 2.0;
    };
})();

console.log(stats);
console.log(half(stats));