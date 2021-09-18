var myArray = [];

var i = 0;
while(i < 5)
{
    myArray.push(i);
    i++;
}

console.log(myArray);

var ourArray = [];

for(var i = 0; i < 5; i++)
{
    ourArray.push(i);
}

console.log(ourArray);

var evenArray = [];

for(var i = 0; i < 10; i += 2)
{
    evenArray.push(i);
}

console.log(evenArray);

var oddArray = [];

for(var i = 1; i < 10; i += 2)
{
    oddArray.push(i);
}

console.log(oddArray);

var reverseArray = [];

for(var i = 10; i > 0; i -= 2)
{
    reverseArray.push(i);
}

console.log(reverseArray);