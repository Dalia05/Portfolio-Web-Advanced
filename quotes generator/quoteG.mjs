//elementen selecteren
let quote = document.getElementById('quote');
let authorE = document.getElementById('author');
let button = document.getElementById('button');

//async & await + arrow functions + elementen manipuleren + self executing function
(async () => {
    //event aan element koppelen
    button.addEventListener('click', async () => {
        let quoteData = await fetchQuote();
        displayQuote(quoteData);
        restartAnimation();
    });

    //fetch om data op te halen
    const fetchQuote = async () => {
        let response = await fetch('https://api.quotable.io/random');
        let data = await response.json();
        return data;
    }

    //template literals + destructuring +JSON manipuleren/weergeven
    const displayQuote = ({ content, author }) => {
        quote.textContent = `"${content}"`;
        authorE.textContent = `- ${author}`;
    }

    const restartAnimation = () => {
        quote.classList.remove('animation');
        void quote.offsetWidth; 
        quote.classList.add('animation'); 
    };

})();
