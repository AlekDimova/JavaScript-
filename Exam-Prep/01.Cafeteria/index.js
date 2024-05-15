function solve(input) {
    const barsitaCount = Number(input.shift()); //tova e mahnalo pyrviq red
    const team = {};

    //prepare team (da ophodim vsqka edna ot baristite kato cast ot inputa)
    for (let i = 0; i < barsitaCount; i++) {
        const [name, shift, coffeeTypes] = input[i].split(' '); //tekushtiq red iskam da go splitna po interval
        //tova shte ni vyrne name, shift i coffeeTypes

        //v team iskam da dobavq shift
        team[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(','), //tova shte ni vyrne masiv ot vsickite opcii Expresso, Cappuchino...
        }
    }

    //Execute commands
    let commandLine = input.shift(); //vzimam 1vata komanda

    while (commandLine != 'Closed') {
        const [command, name, firstArg, secondArg] = commandLine.split(' / ');
        const barista = team[name];

        let shift, coffeeType;
        switch (command) {
            case 'Prepare':
                shift = firstArg;
                coffeeType = secondArg;

                if (barista.shift === shift && barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${name} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${name} is not available to prepare a ${coffeeType}.`);
                }
                break;
            case 'Change Shift':
                shift = firstArg;
                barista.shift = shift;
                console.log(`${name} has updated his shift to: ${shift}`);
                break;
            case 'Learn':
                coffeeType = firstArg;
                if (barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${name} knows how to make ${coffeeType}.`);
                } else {
                    barista.coffeeTypes.push(coffeeType);
                    console.log(`${name} has learned a new coffee type: ${coffeeType}.`);
                }
                break;
        }

        commandLine = input.shift();
    }

    for (const baristaName in team) {
        console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].shift}, Drinks: ${team[baristaName].coffeeTypes.join(', ')}`);
    }
}