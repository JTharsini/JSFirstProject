function checkScope()
{
    "use strict";

    //var i = "function scope";
    if(true)
    {
        var i = "block scope";
        console.log("block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);  // i is accessible outside the block also
    // can't do the same with let keyword
    return i;
}

checkScope();

function checkLetScope()
{
    // let scope is inside the area it's
    // restricted to
    "use strict";

    let i = "function scope";
    if(true)
    {
        let i = "block scope";
        console.log("block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkLetScope();