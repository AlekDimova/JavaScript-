function solve(input) {
    const pattern = /#([a-zA-Z]+)/g;

    const matches = input.matchAll(pattern);
    for (const match of matches) {
        console.log(match[1]);
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');