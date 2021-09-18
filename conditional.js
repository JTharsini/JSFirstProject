function ourTrueOrFalse(isItTrue)
{
    if(isItTrue)
    {
        return "it's true";
    }
    else
    {
        return "it's false";
    }
}

console.log(ourTrueOrFalse(true));
console.log(isEqual12(23))

function isEqual12(val)
{
    if(val == 12)
    {
        return "value passed is 12";
    }
    else
    {
        return "value passed is not 12";
    }
}

function isNotEqual12(val)
{
    if(val != 12)
    {
        return "value passed is not equal 12";
    }
    else
    {
        return "value passed is equal to 12";
    }
}

console.log(isNotEqual12(34));
console.log(isNotEqual12(12));
console.log(isNotEqual12('12'));