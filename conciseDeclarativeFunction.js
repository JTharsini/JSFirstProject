const bicycle = {
    gear: 2,
    setGear: function(newGear)
    {
        "use strict";
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

const bicycleModified = {
    gear: 2,
    setGear(newGear)
    {
        "use strict";
        this.gear = newGear;
    }
};

bicycleModified.setGear(3);
console.log(bicycleModified.gear);