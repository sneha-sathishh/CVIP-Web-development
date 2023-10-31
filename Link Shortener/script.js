let btn = document.getElementById("shorten");

btn.addEventListener('click', shortenURL);

async function shortenURL() {
    let longURLInput = document.getElementById("longurl");
    let shortURLInput = document.getElementById("shorturl");

    let longURL = longURLInput.value;

    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
        const data = await response.json();

        if (data && data.result && data.result.short_link2) {
            let shortURL = data.result.short_link2;
            shortURLInput.value = shortURL;
        } else {
            throw new Error('Failed to shorten Link.');
        }
    } catch (error) {
        console.error(error);
       
    }
}