const magic1 = function()
{
    return new Date();
};
console.log(magic1());

const magic2 = () => new Date();
console.log(magic2());

const myConcat = function(arr1, arr2)
{
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

const myConcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat2([1, 2], [3, 4, 5]));

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num> 0)
                            .map(x => Math.pow(x, 2));
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);