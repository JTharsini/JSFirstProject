var profiles = [
    {
        "firstName": "Jay",
        "lastName": "lastName",
        "number": "0478589"
    },
    {
        "firstName": "Tharani",
        "lastName": "Jay",
        "likes": ["Python", "Objective C"]
    }
];

function lookUpProfile(name, prop)
{
    for(var i = 0; i < profiles.length; i++)
    {
        if(profiles[i].firstName === name)
        {
            return profiles[i][prop] || "not found that property";
        }
    }
    return "not found the profile";
}

console.log(lookUpProfile("Tharani", "likes"));
console.log(lookUpProfile("Tharani", "boyfriend"));
console.log(lookUpProfile("Tharsini", "test"));