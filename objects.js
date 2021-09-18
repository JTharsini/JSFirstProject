var ourDog = {
    "name": "Camper",
    "legs": 5,
    "tails": 1,
    "friends":["everything!"]
};

console.log(ourDog.name);
var legs = ourDog.legs;
console.log(legs);

ourDog.legs = 4;
console.log(ourDog.legs);

ourDog.newProp = "Bow-wow";
console.log(ourDog.newProp);

delete ourDog.friends;
console.log("friends: " + ourDog.friends);

// when there is space in property name, dot notation
// will not work. need to use [''] notation.

var me = {
    "my name": "JJ",
    "my age": 29
};

console.log(me['my name']);
console.log(me["my age"]);

me["my name"] = "JayJay";
console.log(me["my name"]);

me["degree"] = "BSc";
console.log(me["degree"]);

delete me["my age"];
console.log("My age: " + me["my age"]);

var testObj = {
    12: "12th pl",
    16: "16th pl",
    19: "19th pl"
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);