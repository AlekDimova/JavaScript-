function solve(input) {
    const meetings = {};
    
    for (const line of input) {
        const [weekday, name] = line.split(' ');

    //da proverim dali syshtestvuva vece zapis
        if (meetings[weekday]) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = name; //go zapisvame
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (const weekday in meetings) {
        console.log(`${weekday} -> ${meetings[weekday]}`);
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)