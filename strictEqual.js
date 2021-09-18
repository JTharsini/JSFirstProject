function isStrictEqual(val)
{
    if(val === '3')
    {
        return "value passed is '3' and type is also same";
    }
    else
    {
        return "value passed is not '3'";
    }
}
function isEqual(val)
{
    if(val == '3')
    {
        return "value passed can be interpreted as 3 by converting its type";
    }
    else
    {
        return "value passed can't be interpreted as 3 even though converting its type"
    }
}
console.log(isStrictEqual(3));
console.log(isStrictEqual('3'));
console.log(isEqual(3));
console.log(isEqual('3'));
console.log(isEqual(4));

function isNotStrictEqual(val)
{
    if(val !== '3')
    {
        return "value passed is not '3'";
    }
    else
    {
        return "value passed is '3'";
    }
}
console.log(isNotStrictEqual(3));
console.log(isNotStrictEqual('3'));