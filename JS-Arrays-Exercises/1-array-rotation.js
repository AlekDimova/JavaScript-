function solve(numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        let rotatedNumbers = [];
        let firstNumber = numbers[0];
        for (let j = 1; j < numbers.length; j++) {
        rotatedNumbers[j - 1] = numbers[j]
        }

    rotatedNumbers[rotatedNumbers.length] = firstNumber;
    numbers = rotatedNumbers;

}

    console.log(numbers.join(' '));
}

//2nd way to slove more quick
function solveFaster(numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        numbers.push(numbers.shift()); // izvadi mi pyrviq element i mi go slozi na kraqot (pyrvo se izpylnqva shift)
    } //napravi go n broi pyti

    console.log(numbers.join(' '));
}

//2nd way extended
function solveFaster2(numbers, rotations) {
    for (let i = 0; i < rotations; i++) { 
        let firstNumber = numbers.shift();
        numbers.push(firstNumber); 
    } 

    console.log(numbers.join(' '));
}

solveFaster2([51, 47, 32, 61, 21], 2);