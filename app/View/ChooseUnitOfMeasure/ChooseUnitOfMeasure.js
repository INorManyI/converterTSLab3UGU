import {createViewModel} from "~/View/ChooseUnitOfMeasure/ChooseUnitOfMeasureViewModel";

export function onNavigatingTo(args)
{
    const page = args.object;
    page.bindingContext = createViewModel(page.navigationContext);
}
