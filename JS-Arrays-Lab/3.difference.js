function solve(numbers) {
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    let evenNumbers = numbers.filter(num => num % 2 === 0);

    let oddSum = oddNumbers.reduce((a, b) => a + b, 0);
    let evenSum = evenNumbers.reduce((a, b) => a + b, 0);

    console.log(evenSum - oddSum);
}

function solve2(numbers) {
    let result = numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum - num , 0);

    console.log(result);
}

function solve3(arr) {
    let sumOfEvenNumbers = 0;
    let sumOfOddNumbers = 0;

    for(let i = 0; i < arr.length; i++) {
        const currentNumber = Number(arr[i]);
        const isEvenNumber = currentNumber % 2 === 0;

        if (isEvenNumber) {
            sumOfEvenNumbers += currentNumber;
            // sumOfEvenNumbers = sumOfEvenNumbers + currentNumber;
        } else {
            sumOfOddNumbers += currentNumber;
        }
    }

    console.log(sumOfEvenNumbers - sumOfOddNumbers);
}

solve3([3,5,7,9]);