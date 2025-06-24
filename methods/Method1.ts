export const Method1 = (number: number): boolean => {
    let multiplicationOfDigits: number = 1;
    const num: number = number;

    while (number > 0) {
        const digit: number = number % 10;
        multiplicationOfDigits *= digit;
        number = Math.floor(number / 10);
    }

    if (num % multiplicationOfDigits === 0) {
        return true;
    }else {
        return false;
    }
};

export const Method1Description: string = 'Числа Цукермана';