let quote = document.getElementById('quote');
let authorE = document.getElementById('author');
let button = document.getElementById('button');

(async function() {
    button.addEventListener('click', async () => {
        let quoteData = await fetchQuote();
        displayQuote(quoteData);
        restartAnimation();
    });

    const fetchQuote = async () => {
        let response = await fetch('https://api.quotable.io/random');
        let data = await response.json();
        return data;
    }

    const displayQuote = ({ content, author }) => {
        quote.textContent = `"${content}"`;
        authorE.textContent = `- ${author}`;
    }

    const restartAnimation = () => {
        quote.classList.remove('animation');  // Remove the class to stop the animation
        void quote.offsetWidth;  // Trigger a reflow to restart the animation
        quote.classList.add('animation');  // Add the class back to restart the animation
    };
})();
