import {Observable} from "@nativescript/core";
import {Frame} from "@nativescript/core";
import {UnitOfMeasureGetName} from "~/Model/UnitsOfMeasure/UnitOfMeasureGetName";
import {
    ConvertionParticipantsGetAllParticipants,
    ConvertionParticipantsSetTarget, ConvertionParticipantsSetBase, ConvertionParticipantsGetBase
} from "~/Model/UnitsOfMeasure/ConvertionParticipants";

const vm = new Observable();

function saveSelection(args)
{
    let unitOfMeasure = args.object.items[args.index].unitOfMeasure;
    if (vm.get('isChangingBaseUnitOfMeasure'))
        ConvertionParticipantsSetBase(unitOfMeasure);
    else
        ConvertionParticipantsSetTarget(unitOfMeasure);
    Frame.goBack();
}

function getConvertionParticipants()
{
    let unitsOfMeasures = ConvertionParticipantsGetAllParticipants();
    let result = [];
    for (let unitOfMeasure of unitsOfMeasures)
    {
        let name = UnitOfMeasureGetName(unitOfMeasure);
        result.push({unitOfMeasure: unitOfMeasure, unitOfMeasureName: name});
    }
    return result;
}

export function createViewModel(context)
{
    vm.set('isChangingBaseUnitOfMeasure', context.isChangingBaseUnitOfMeasure);
    vm.goBack = Frame.goBack;
    vm.saveSelection = saveSelection;
    vm.unitsOfMeasure = getConvertionParticipants();
    return vm;
}
