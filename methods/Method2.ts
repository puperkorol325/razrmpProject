export const Method2 = (number: number): boolean => {
    let sumOfDigits: number = 0;
    const num: number = number;

    while (number > 0) {
        const digit: number = number % 10;
        sumOfDigits += digit;
        number = Math.floor(number / 10);
    }

    if (num % sumOfDigits === 0) {
        return true;
    }else {
        return false;
    }
};

export const Method2Description: string = 'Числа Нивена';