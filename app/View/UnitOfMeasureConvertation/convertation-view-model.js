import {Observable} from "@nativescript/core";
import {Frame} from "@nativescript/core";
import {
    UserInputAddSymbol, UserInputClear, UserInputDeleteLastSymbol,
    UserInputGetAsNumber,
    UserInputGetAsString,
} from "~/Model/UserInput";
import {
    ConvertionParticipantsGetBase,
    ConvertionParticipantsGetTarget,
    ConvertionParticipantsSetTarget,
    ConvertionParticipantsSetBase
} from "~/Model/UnitsOfMeasure/ConvertionParticipants";
import {UnitOfMeasureGetName} from "~/Model/UnitsOfMeasure/UnitOfMeasureGetName";
import {
    UnitOfMeasureConvert
} from "~/Model/UnitsOfMeasure/UnitOfMeasureConvert";

const vm = new Observable();

function refreshConvertionParticipantsNames()
{
    let base = ConvertionParticipantsGetBase();
    let target = ConvertionParticipantsGetTarget();
    vm.set('baseUnitOfMeasureName', UnitOfMeasureGetName(base));
    vm.set('targetUnitOfMeasureName', UnitOfMeasureGetName(target));
}

function refreshConvertionParticipantsValues()
{
    let target = ConvertionParticipantsGetTarget();
    let base = ConvertionParticipantsGetBase();
    let baseValue = UserInputGetAsString().replace('.', ',');
    let targetValue = UnitOfMeasureConvert(UserInputGetAsNumber(), base, target);
    vm.set('baseUnitOfMeasureValue', baseValue);
    vm.set('targetUnitOfMeasureValue', targetValue);
}

function userInputClear()
{
    UserInputClear();
    refreshConvertionParticipantsValues();
}

function userInputAddSymbol(args)
{
    let symbol = args.object.text;
    UserInputAddSymbol(symbol);
    refreshConvertionParticipantsValues();
}

function swapBaseAndTargetUnitsOfMeasure()
{
    let base = ConvertionParticipantsGetBase();
    let target = ConvertionParticipantsGetTarget();
    ConvertionParticipantsSetTarget(target);
    ConvertionParticipantsSetBase(base);
    refreshConvertionParticipantsNames();
    refreshConvertionParticipantsValues();
}

function userInputDeleteLastSymbol()
{
    UserInputDeleteLastSymbol();
    refreshConvertionParticipantsValues();
}

function switchBaseUnitOfMeasure()
{
    Frame.topmost().navigate({
        moduleName: '/View/ChooseUnitOfMeasure/ChooseUnitOfMeasure',
        context: { isChangingBaseUnitOfMeasure: true }
    });
}

function switchTargetUnitOfMeasure()
{
    Frame.topmost().navigate({
        moduleName: '/View/ChooseUnitOfMeasure/ChooseUnitOfMeasure',
        context: { isChangingBaseUnitOfMeasure: false }
    });
}

function goBackToHomePage()
{
   Frame.topmost().navigate({
       moduleName: '/View/home',
       clearHistory: true
   });
}

export function createViewModel(context)
{
    vm.title = context.convertationTitle;
    vm.goBackToHomePage = goBackToHomePage;
    vm.userInputAddSymbol = userInputAddSymbol;
    vm.clearUserInput = userInputClear;
    vm.userInputDeleteLastSymbol = userInputDeleteLastSymbol;
    vm.swapBaseAndTargetUnitsOfMeasure = swapBaseAndTargetUnitsOfMeasure;
    vm.switchBaseUnitOfMeasure = switchBaseUnitOfMeasure;
    vm.switchTargetUnitOfMeasure = switchTargetUnitOfMeasure;
    refreshConvertionParticipantsValues();
    refreshConvertionParticipantsNames();
    return vm;
}
