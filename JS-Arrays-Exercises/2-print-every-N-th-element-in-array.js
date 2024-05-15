//pocvame vinagi ot pyrvoto i broim stypki
function solve(array, step) {
    let result = [];

    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);
    }

    return result;
}

function quickSolution (array, step) {
    const result = array.filter((element, index) => index % step === 0);

    return result;

    // return array.filter((element, index) => index % step === 0);
}

console.log (solve(['5',
'20',
'31',
'4',
'20'],
2));

