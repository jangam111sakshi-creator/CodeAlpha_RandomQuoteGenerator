const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("newQuote");

async function getQuote() {

    quoteText.textContent = "Loading...";
    authorText.textContent = "Please wait...";

    try {

        const response = await fetch(
            "https://www.drivebird.com/api/quotes/random"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const result = await response.json();

        const quote = result.data[0];

        quoteText.textContent = `"${quote.quote}"`;
        authorText.textContent = `— ${quote.author}`;

    } catch (error) {

        console.log("API Error:", error);

        quoteText.textContent =
            "Every day is a new opportunity to grow.";

        authorText.textContent =
            "— Unknown";

    }
}

newQuoteButton.addEventListener("click", getQuote);

getQuote();