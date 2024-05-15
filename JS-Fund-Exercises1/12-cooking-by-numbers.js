// 6 parametata (1 cislo i 5 stringa)
function solve(numAsString, op1, op2, op3, op4, op5) {
    let num = Number(numAsString);
    let operations = [];
    operations.push(op1);
    operations.push(op2);
    operations.push(op3);
    operations.push(op4);
    operations.push(op5);

    for (let i = 0; i < operations.length; i++) {
        let currentOperation = operations[i];

        switch (currentOperation) {
            case "chop": 
                num /= 2;
                break;
            case "dice": 
                num = Math.sqrt(num);
                break;
            case "spice": 
                num += 1;
                break;
            case "bake": 
                num *= 3;
                break;
            case "fillet":
                num *= 0.80;
                num = num.toFixed(1);
                break;
        }

        console.log(num);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake','fillet');