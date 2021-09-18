class Book
{
    constructor(author)
    {
        this._author = author;
    }

    get writer()
    {
        return this._author;
    }

    set writer(updatedAuthor)
    {
        this._author = updatedAuthor;
    }
}

const book = new Book("jj");
console.log(book._author);

function makeClass(){
    class Thermostat
    {
        constructor(temperature)
        {
            this._temperature = 5/9 * (temperature - 32);
        }

        set temperature(newTemperature)
        {
            this._temperature = 5/9 * (newTemperature - 32);
        }

        get temperature()
        {
            return this._temperature;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(78);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
console.log(thermos.temperature);
temp = thermos.temperature;
console.log(temp);