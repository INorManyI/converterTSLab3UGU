let userInput = '';

export function UserInputGetAsString()
{
    return userInput;
}

export function UserInputGetAsNumber()
{
    if (userInput === '')
        return 0.0;
    return parseFloat(userInput);
}

export function UserInputClear()
{
     userInput = '';
}

export function UserInputDeleteLastSymbol()
{
     userInput = userInput.slice(0, -1);
}

function isDigit(c)
{
    return (c >= '0') && (c <= '9');
}

function isDecimalDelimiter(c)
{
    return (c === '.') || (c === ',');
}

function countDecimalDelimiters(str)
{
   let result = 0;
   for (let chr of str)
       if (isDecimalDelimiter(chr))
           result++;
   return result;
}

function addDigitToUserInput(c)
{
    if (userInput !== '0')
         userInput += c;
}

function addDecimalDelimiterToUserinput()
{
    if (userInput === '')
        return;
    if (countDecimalDelimiters(userInput) === 0)
        userInput += '.';
}

export function UserInputAddSymbol(symbol)
{
    if (isDecimalDelimiter(symbol))
    {
        addDecimalDelimiterToUserinput();
    }
    else if (isDigit(symbol))
    {
        addDigitToUserInput(symbol);
    }
}
