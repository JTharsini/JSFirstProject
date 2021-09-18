var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x : a, y : b, z : c } = voxel;
// copy x, y and z values to a, b and c

console.log(a, b, c);

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures)
{
    "use strict";
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow; 
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast)
{
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));