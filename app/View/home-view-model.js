import { Observable } from '@nativescript/core'
import {Frame} from "@nativescript/core";
import {
    GetAreaUnitsOfMeasure,
    GetLengthUnitsOfMeasure,
    GetTimeUnitsOfMeasure,
    GetVolumeUnitsOfMeasure, GetWeightUnitsOfMeasure
} from "~/Model/UnitsOfMeasure/UnitOfMeasureGroups";
import {
    ConvertionParticipantsSet,
} from "~/Model/UnitsOfMeasure/ConvertionParticipants";

function gotoConvertationPage(title)
{
    Frame.topmost().navigate({
        moduleName: '~/View/UnitOfMeasureConvertation/convertation',
        context: {
            convertationTitle: title
        }
    })
}

function convertLengthUnitsOfMeasure()
{
    let unitsOfMeasure = GetLengthUnitsOfMeasure();
    ConvertionParticipantsSet(unitsOfMeasure);
    gotoConvertationPage('Длина');
}

function convertAreaUnitsOfMeasure()
{
    let unitsOfMeasure = GetAreaUnitsOfMeasure();
    ConvertionParticipantsSet(unitsOfMeasure);
    gotoConvertationPage('Площадь');
}

function convertVolumeUnitsOfMeasure()
{
    let unitsOfMeasure = GetVolumeUnitsOfMeasure();
    ConvertionParticipantsSet(unitsOfMeasure);
    gotoConvertationPage('Объем');
}

function convertTimeUnitsOfMeasure()
{
    let unitsOfMeasure = GetTimeUnitsOfMeasure();
    ConvertionParticipantsSet(unitsOfMeasure);
    gotoConvertationPage('Время');
}

function convertWeightUnitsOfMeasure()
{
    let unitsOfMeasure = GetWeightUnitsOfMeasure();
    ConvertionParticipantsSet(unitsOfMeasure);
    gotoConvertationPage('Вес');
}

export function createViewModel()
{
    let vm = new Observable();
    vm.convertAreaUnitsOfMeasure = convertAreaUnitsOfMeasure;
    vm.convertLengthUnitsOfMeasure = convertLengthUnitsOfMeasure;
    vm.convertVolumeUnitsOfMeasure = convertVolumeUnitsOfMeasure;
    vm.convertTimeUnitsOfMeasure = convertTimeUnitsOfMeasure;
    vm.convertWeightUnitsOfMeasure = convertWeightUnitsOfMeasure;
    return vm;
}
