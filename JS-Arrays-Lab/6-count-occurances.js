function solve(text, word) {
    let result = text
        .split(' ')
        .filter(element => element === word)
        .length;

    console.log(result);
}

//2nd solution
function solve2(text, searchWord) {
    let words = text.split(" ");
    let counter = 0;

    for (const word of words) {
        if (word === searchWord) counter ++;
    }

    console.log(counter);
}

solve2('This is a word and it also is a sentence',
    'is'
)