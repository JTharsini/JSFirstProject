var myName = "Jeya";
var myMiddleName = "tharsini";

console.log(myName);
console.log(myMiddleName);

var doubleQuoted = "I am a \"double quoted\" string"
console.log(doubleQuoted);

var singleQuotedWithoutEscape = '<a href="http://www.example.com"></a>';
console.log(singleQuotedWithoutEscape);

var backQuotedWithoutEscape = `He said: "it's bad"`;
console.log(backQuotedWithoutEscape);

var hello = "Hello " + "world";
console.log(hello);

var stringConcatenationWithVariable = "Hello " + myMiddleName;
console.log(stringConcatenationWithVariable);

var append = "append";
append += " test";
console.log(append);

var charCount = "test";
console.log(charCount.length);
console.log(charCount[0]);

var immutable = "Hello";
immutable[0] = "H";
console.log(immutable);
console.log(immutable[immutable.length - 1]);

console.log(wordBlanks("dog", "big", "ran", "quickly"));

function wordBlanks(noun, adjective, verb, adverb)
{
    var result = "";

    result += adjective + " " + noun + " " + adverb + " " + verb;
    return result;
}