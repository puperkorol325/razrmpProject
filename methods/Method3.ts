export const Method3 = (number: number): boolean => {
    let digits: number[] = [];
    const num: number = number;

    while (number > 0) {
        const digit: number = number % 10;
        digits.push(digit);
        number = Math.floor(number / 10);
    }

    const sumPowDigits: number = digits.reduce((prev, item) => prev + Math.pow(item, digits.length), 0);

    if (sumPowDigits === num) {
        return true;
    }else {
        return false;
    }
}

export const Method3Description: string = 'Числа Армстронг';