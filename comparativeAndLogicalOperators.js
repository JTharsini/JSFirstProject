function comparativeAnd(val)
{
    if(val > 56 && val < 100)
    {
        return "between 56 and 100";
    }
    else if(val >= 14 && val <= 56)
    {
        return "less than 56 and greater than or equal to 14";
    }
    else
    {
        return "not in any special range";
    }
}

console.log(comparativeAnd(59));
console.log(comparativeAnd(47));
console.log(comparativeAnd(10));

function comparativeOr(val)
{
    if(val > 56 || val < 10)
    {
        return "more than 56 or less than 10";
    }
    else
    {
        return "not in any special range";
    }
}

console.log(comparativeOr(85));
console.log(comparativeOr(5));
console.log(comparativeOr(50));