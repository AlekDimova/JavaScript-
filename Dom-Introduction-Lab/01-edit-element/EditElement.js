function editElement(element, match, replacer) {
    //const currentContent = element.textContent; //trqbva da vzemem textContent na elementa

    //po-byrzo resenie no ne raboti v judge
    //element.textContent = element.textContent.replaceAll(match, replacer);

    //proverqvam ima li match vytre , ako ima vlez vytre i zyzdai noviq string s replace-tniot match
    //i go setni vece novo syzdadeniq string v tekushtiq text conctent
    while(element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, replacer);
    }

    //Regex solution
    //element.textContent = element.textContent.replace(new RegExp(match, 'g'), replacer);
}