function solve(number) {
    const isEven = x => x % 2 === 0;
    const isOdd = x => !isEven(x);
    
    const evenSum = calculateDigitSum(number, isEven);
    const oddSum = calculateDigitSum(number, isOdd);

    printResult(oddSum, evenSum);
}

function calculateDigitSum(number, filter) {
    //1vo numbera trqbva da go razbiem na masiv ot digiti
    //2ro da smetnim sumata
    const filteredDigits = number
        .toString() //pravim go v string za da napravime polesno masiv
        .split('') //pravim go v masiv
        .map(Number) //preobrazuvame go v masiv ot cisla
        .filter(filter);

    const sum = filteredDigits.reduce((acc, digit) => acc + digit, 0); //accomulator a drugoto e digit
    //pyrvonacalnata stoinost na accomulatora shte e 0

    return sum;
}

function printResult(oddSum, evenSum) {
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
