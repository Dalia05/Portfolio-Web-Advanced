// Elementen selecteren
let quote = document.getElementById('quote');
let authorE = document.getElementById('author');
let button = document.getElementById('button');

// Event aan element koppelen
button.addEventListener('click', () => {
    fetchQuote()
        .then(data => displayQuote(data))
        .then(() => restartAnimation())
        .catch(error => console.error('Error fetching quote:', error));
});

//consumer methods + promise
const fetchQuote = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.quotable.io/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
};

//Template literals
const displayQuote = ({ content, author }) => {
    quote.textContent = `"${content}"`;
    authorE.textContent = `- ${author}`;
};

const restartAnimation = () => {
    quote.classList.remove('animation');
    void quote.offsetWidth;
    quote.classList.add('animation');
};
