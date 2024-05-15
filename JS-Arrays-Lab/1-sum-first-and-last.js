function solve(numbers) {
    let firstNumber = numbers.shift(); //vzimame 1voto cislo
    let lastNumber = numbers.pop(); //vzimame poslednoto

    console.log(firstNumber + lastNumber);
}

solve([20, 30, 40])