function mathMin(numbers, initialNumber = Number.MAX_SAFE_INTEGER) {
    let minNumber = initialNumber;

    for (const number of numbers) {
        if (minNumber > number) {
            minNumber = number;
        }
    }

    return minNumber;
}

function defaultMathMin(numbers) {
    return Math.min(...numbers);
}

function solve(...numbers) {
    const result = mathMin(numbers);

    console.log(result);
} 

//ako iskame da q resim mnogo po-byrzo
function solve2(a, b, c) {
    console.log(Math.min(a, b, c));
}


solve(2,
    5,
    3
);