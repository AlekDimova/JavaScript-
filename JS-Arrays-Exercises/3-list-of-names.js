function solve(names) {
    names
        .sort((a, b) => a.localeCompare(b))
        .forEach((name, index) => {
            console.log(`${index + 1}.${name}`);
        });

//    for(const name of names) {
//       console.log(name);
//   }

}

solve(["John", "bob", "Christina", "Ema"]);