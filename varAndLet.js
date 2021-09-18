// var allows to declare and assign catName twice
var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk()
{
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

    // this will give error since
    // usage without declaration
    // and "use strict"
    // to reduce error
    tasty = "wow";
}

catTalk();

// let doesn't allow to declare more than once
let newName = "Quincy";
newName = "JJ";