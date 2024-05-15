function solve(word, text) {
    const isIncluded = text.toLowerCase().includes(word.toLowerCase());
    if (isIncluded) {
        return word;
    }

    return `${word} not found!`

}

const result = solve('javascript', 'JavaScript is the best programming language')
console.log(result);