function randomFraction()
{
    var random = Math.random();
    return random;
}

console.log(randomFraction());

var randomNumberBetween0And19 = Math.floor(Math.random() * 20);
function randomWholeNum()
{
    return randomNumberBetween0And19;
}

console.log(randomWholeNum());

function ourRandomRange(ourMin, ourMax)
{
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));