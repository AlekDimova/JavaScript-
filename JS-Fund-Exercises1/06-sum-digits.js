function solve(number) {
    //let result = number;
    let sum = 0;

    while(number > 0) {
        sum += number % 10; // vzemi 8micata i q dobavi
        number = Math.trunc(number / 10); //izrezi 8micata
    }

    console.log(sum);
}

/**
 * 
 * @param {number} number 
 */

//2nd way
function solveWithStrings(number) {
    let textNumber = number.toString();
    let sum = 0;

    for(let i = 0; i < textNumber.length; i++) {
        //sum += Number(textNumber[i]);
        sum += Number(textNumber.charAt(i));
    }

    console.log(sum);
}



solveWithStrings(245678);