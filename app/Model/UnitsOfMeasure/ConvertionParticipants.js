let base = undefined;
let participants = undefined;
let target = undefined;

export function ConvertionParticipantsSet(unitsOfMeasure)
{
    participants = new Set(unitsOfMeasure);
    ConvertionParticipantsSetBase(unitsOfMeasure[0]);
    ConvertionParticipantsSetTarget(unitsOfMeasure[0]);
}

export function ConvertionParticipantsSetBase(unitOfMeasure)
{
    base = unitOfMeasure;
}

export function ConvertionParticipantsSetTarget(unitOfMeasure)
{
    target = unitOfMeasure;
}


export function ConvertionParticipantsGetTarget()
{
    return target;
}

export function ConvertionParticipantsGetBase()
{
    return base;
}

export function ConvertionParticipantsGetAllParticipants()
{
    if (participants === undefined)
        return [];
    return [...participants];
}
