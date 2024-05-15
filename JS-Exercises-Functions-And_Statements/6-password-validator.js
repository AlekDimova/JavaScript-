const isValidLength = password => password.length >= 6 && password.length <= 10;
const isAlphaNumerical = password => /^[a-zA-Z0-9]+$/.test(password);
const isStrong = password => password
    .split('')
    .filter(character => Number.isInteger(Number(character)))
    .length >= 2;  //proverka dali imame i cislo

function solve(password) {
    let isValid = true;

    if (!isValidLength(password)) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters')
    }

    if (!isAlphaNumerical(password)) {
        isValid = false;
        console.log('Password must consist only of letters and digits');
    }

    if (!isStrong(password)) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if (isValid) {
        console.log('Password is valid');
    }

}

//another solution more fancy
function fancySolve(password) {
    const validations = [
        [isValidLength, 'Password must be between 6 and 10 characters'],
        [isAlphaNumerical, 'Password must consist only of letters and digits'],
        [isStrong, 'Password must have at least 2 digits'],
    ];

    const errors = validations
        .map(([validator, message]) => validator(password) ? '' : message)
        .filter(message => !!message); //da izcisti praznia string '' , a morame da go slozime oti morame da vyrnime nesto

    errors.forEach(message => console.log(message)); //errors.forEach(console.log) moze i samo vaka poskrateno
    //minavam prez vsickite greski i gi razpecatvam na konzolata
    //i nqma nuzda da proverqvame dali ima ili nqma greski zastoto ako nqma toi nqma da napravi nisto

    //ako vse pak nqma greski moze da razpecatis password is valid
    if (errors.length === 0) {
        console.log('Password is valid');
    }
}


solve('logIn');
solve('MyPass123');
solve('Pa$s$s');
