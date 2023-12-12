let convertionMultipliers = new Map();

function getConvertionName(from, to)
{
    return from + '/' + to;
}

export function UnitOfMeasureConvert(value, from, to)
{
    let convertionName = getConvertionName(from, to);
    let multiplier = convertionMultipliers.get(convertionName);
    return value * multiplier;
}

function addConvertions(unitsOfMeasure, multipliers)
{
    for (let i = 0; i < unitsOfMeasure.length; i++)
    {
        for (let j = 0; j < unitsOfMeasure.length; j++)
        {
            let convertionName = getConvertionName(unitsOfMeasure[i], unitsOfMeasure[j]);
            let multiplier = multipliers[j] / multipliers[i];
            convertionMultipliers.set(convertionName, multiplier);
        }
    }
}

function addTimeConvertions()
{
    let unitsOfMeasure =
    [
        'year',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
    ];
    let multipliers =
    [
        1,                  //year
        12,                 //month
        1 / (52 + 1/7),     //week
        365,                //day
        8760,               //hour
        525600,             //minute
        31536000,           //second
    ];
    addConvertions(unitsOfMeasure, multipliers);
}


function addAreaConvertions()
{
    let unitsOfMeasure =
    [
        'sq_kilometer',
        'sq_meter',
        'sq_centimeter',
        'sq_millimeter',
    ];
    let multipliers =
    [
        1,                        //square kilometer
        1000000,                  //square meter
        10000000000,              //square centimeter
        10000000000000            //square millimeter
    ];
    addConvertions(unitsOfMeasure, multipliers);
}

function addLengthConvertions()
{
    let unitsOfMeasure =
    [
        'kilometer',
        'meter',
        'centimeter',
        'millimeter',
        'micrometer',
        'nanometer',
    ];
    let multipliers =
    [
        1,             //kilometer
        1000,          //meter
        100000,        //centimeter
        10000000,      //millimeter
        10000000000,    //micrometer
        10000000000000, //nanometer
    ];
    addConvertions(unitsOfMeasure, multipliers);
}

function addVolumeConvertions()
{
    let unitsOfMeasure =
    [
        'cubic_centimeter',
        'cubic_millimeter',
        'liter',
        'milliliter',
    ];
    let multipliers =
    [
        1000,        //cubic centimeter
        1000000,     //cubic millimeter
        1,           //liter
        1000,        //milliliter
    ];
    addConvertions(unitsOfMeasure, multipliers);
}

function addWeightConvertions()
{
    let unitsOfMeasure =
    [
        'tonne',
        'kilogram',
        'gram',
        'milligram',
        'microgram',
    ];
    let multipliers =
    [
        1,                      //tone
        1000,                   //kilogram
        1000000,                //gram
        1000000000,             //milligram
        1000000000000,          //microgram
    ];
    addConvertions(unitsOfMeasure, multipliers);
}

addLengthConvertions();
addAreaConvertions();
addWeightConvertions();
addVolumeConvertions()
addTimeConvertions();
