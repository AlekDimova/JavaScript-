// function solve(wordsInput, template) {
//     //1vo da preobrazuvame stringa s dumickite v masiv ot dumicki
//     const words = wordsInput.split(', '); //taka shte imame masiv ot tezi dumicki
//     let startIndex = -1;
//     let endIndex = -1;

//     for(let i = 0; i < template.length; i++) {
//         if(template[i] === '*') {
//             if (startIndex < 0) {
//                 startIndex = i;
//                 endIndex = i + 1;
//             } else {
//                 endIndex = i + 1;
//             }
//         } else {
//             if(startIndex >= 0) {
//                 let length = endIndex - startIndex;
//                 let word = words.find(w => w.length === length);
//                 template = template.replaceAll('*'.repeat(length), word);
//                 startIndex = -1;
//                 endIndex = -1;
//             }
//         }
//     }

//     console.log(template);

// }

function solve(wordsInput, template = '') {
    const words = wordsInput.split(', ');

    const matches = template.matchAll(/\*+/g);
    for (const match of matches) {
        const word = words.find(w => w.length === match[0].length);
        template = template.replace(match[0], word);

    }

    console.log(template);
}

function fancySolve(wordsInput, template = '') {
    const words = wordsInput.split(', ');
    const templateWords = template.split(' ');

    const result = templateWords
        .map(tWord => tWord[0] === '*' 
            ? words.find(w => w.length === tWord.length) 
            : tWord)
        .join(' ');

        console.log(result);
}

function interestingSolve(words, text) {
    let wordsArr = words.split(', ');
    let textArr = text.split(' ');

    for(let i = 0; i < wordsArr.length; i++) {
        for(let j = 0; j < textArr.length; j++) {
            if(textArr[j].includes('*') && textArr[j].length === wordsArr[i].length) {
                textArr[j] = wordsArr[i];
            }
        }
    }

    console.log(textArr.join(' '));
}

interestingSolve('great, learning',
'softuni is ***** place for ******** new programming languages');