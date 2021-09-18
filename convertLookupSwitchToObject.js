function phoneticLookup(val)
{
    var result = "";
    switch(val)
    {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Bostan";
            break;
        case "charlie":
            result = "Chicago";
            break;
    }
    return result;
}

console.log(phoneticLookup("bravo"));

function phoneticLookup2(val)
{
    var result = "";

    var lookup = {
    "alpha": "Adams",
    "bravo": "Bostan",
    "charlie": "Chicago"
    }

    result = lookup[val];
    return result;
}

console.log(phoneticLookup2("bravo"));