export const Method4 = (number: number): boolean => {
    const reverseNumber = (num: number): number => {
        return parseInt(num.toString().split('').reverse().join(''));
    };

    const isPalindrome = (num: number): boolean => {
        return num === reverseNumber(num);
    };

    let currentNum = number;
    let iterations = 0;
    const maxIterations = 50; 

    while (iterations < maxIterations) {
        
        if (iterations === 0 && isPalindrome(currentNum)) {
            return false;
        }

        const reversed = reverseNumber(currentNum);
        const sum = currentNum + reversed;
        
        if (isPalindrome(sum)) {
            return false;
        }

        currentNum = sum;
        iterations++;
    }

    return true;
};

export const Method4Description: string = 'Числа Лишрел';
