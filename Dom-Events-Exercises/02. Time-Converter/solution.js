function attachEventsListeners() {

    //vsicki butoni imat: type="button" value="Convert"
    const convertButtonElements = document.querySelectorAll('input[type=button][value=Convert]');//vzimame vsicki butoni

    const inputElements = document.querySelectorAll('input[type=text]');//vzimame vsicki inputi
    //unit shte e days/hours/seconds/itn
    const toSeconds = (value, unit) => {
        switch(unit) {
            case 'days':
                return value * 24 * 60 * 60;
            case 'hours':
                return value * 60 * 60;
            case 'minutes':
                return value * 60;
            case 'seconds':
                return value;
        } //tova mozese i da e maping vmesto funkcija
    };
    //nasata rabota e che vinagi shte obryshtame v sekundi 
    //i ot sekundi shte obryshtame kum nesto drugo

    const converters = {
        //shte polucim inputa v seconds 
        days(seconds) {
            //shte vyrna obratnoto
            return seconds / 60 / 60 / 24;
        },
        hours(seconds) {
            return seconds / 60 / 60;
        },
        minutes(seconds) {
            return seconds / 60;
        },
        seconds(seconds) {
            return seconds;
        }
    }

    //iskame na vsicki butoni da zakacim event elements
    for(const buttonElement of convertButtonElements) {
        buttonElement.addEventListener('click', (e) => {
            //currentTarget e butona i toj syshto e samo target
            //const currentInputElement = e.currentTarget.parentElement.querySelector('input[type=text]');
            const currentInputElement = e.currentTarget.previousElementSibling;
            //i vyrhu tozi inputElement nie moze da vzemem vyvedenata stoinost ot potrebitelq
            
            //iskame da zakacim pravilnata stoinost na inputite
            //ni trqbva vseki edin ot inputite
            for (const inputElement of inputElements) {
                const seconds = toSeconds(Number(currentInputElement.value), currentInputElement.id);//id shte ni e unita
                inputElement.value = converters[inputElement.id](seconds);
                //tova ni pozvolqva convertera po id-to na elementa 
                //kum koito iskame da konvertirame da mu podadem sekundite
                
            }

        })
    }
}