function printManyTimes(str)
{
    "use strict";

    const SENTENCE = str + " is cool!";
    // since it declares as const
    // can't re-assign
    // all caps for const

    for(var i = 0; i < str.length; i+=2)
    {
        console.log(SENTENCE);
    }
}

printManyTimes("freeCodeCamp");