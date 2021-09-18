var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It rock",
            "You give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    }
}

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value)
{
    if(value === "")
    {
        delete collection[id][prop];
    }
    else if(prop === "tracks")
    {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else{
        collection[id][prop] = value;            
    }
    return collection;
}

//console.log(updateRecords(2468, "artist", "JJ"));
//console.log(updateRecords(2468, "tracks", "JJ"));
console.log(updateRecords(2468, "jjprops", "JJ"));