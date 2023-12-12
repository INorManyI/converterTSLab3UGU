let names = new Map();

export function UnitOfMeasureGetName(unitOfMeasure)
{
    return names.get(unitOfMeasure);
}

names.set('year', 'Годы');
names.set('month', 'Месяцев');
names.set('week', 'Недель');
names.set('day', 'Дней');
names.set('hour', 'Часов');
names.set('minute', 'Минут');
names.set('second', 'Секунд');
names.set('kilometer', 'Километров');
names.set('meter', 'Метров');
names.set('centimeter', 'Сантиметров');
names.set('millimeter', 'Миллиметров');
names.set('micrometer', 'Микрометров');
names.set('nanometer', 'Нанометров');
names.set('sq_kilometer', 'Квадратных километров');
names.set('sq_meter', 'Квадратных метров');
names.set('sq_centimeter', 'Квадратных сантиметров');
names.set('sq_millimeter', 'Квадратных миллиметров');
names.set('tonne', 'Тонн');
names.set('kilogram', 'Килограммов');
names.set('gram', 'Граммов');
names.set('milligram', 'Миллиграммов');
names.set('microgram', 'Микрограммов');
names.set('cubic_centimeter', 'Кубических сантиметров');
names.set('cubic_millimeter', 'Кубических миллиметров');
names.set('liter', 'Литров');
names.set('milliliter', 'Миллилитров');
