var SpaceShuttle = function(targetPlanet)
{
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

class SpaceShuttleNew
{
    constructor(targetPlanet)
    {
        this.targetPlanet = targetPlanet;
    }
}

var zeusNew = new SpaceShuttleNew('Jupiter');
console.log(zeusNew.targetPlanet);

class Vegetable
{
    constructor(name)
    {
        this.name = name;
    }
}

var carrot = new Vegetable('Carrot');
console.log(carrot.name);