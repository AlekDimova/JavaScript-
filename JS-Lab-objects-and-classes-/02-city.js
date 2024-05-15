function solve(city) {
    Object
        .keys(city) //shte ni vyrne masiv ot vsicki elementi(t.e vzimame samo vsicki keyove)
        .forEach(propName => console.log(`${propName} -> ${city[propName]}`))
        //ophozdame vsicki keyove i pravim nesto no crez key-ovete nie realno moze da vzemem i value-ta city[propName]
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);