var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function getProperty(prop)
{
    if(myObj.hasOwnProperty(prop))
    {
        return myObj[prop];
    }
    else
    {
        return "not found!!";
    }
}

console.log(getProperty("gift"));
console.log(getProperty("test"));