document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button[onclick='fetchApi()']").addEventListener("click", fetchApi);
    document.querySelector("button[onclick='fetchChuckJoke()']").addEventListener("click", fetchChuckJoke);
});
async function fetchApi() {
    const displayCatFact = document.querySelector('#displayCatFact');
    displayCatFact.innerHTML = ""; // Clear previous facts
    
    try {
        const data = await fetch('https://catfact.ninja/facts');
        const response = await data.json();
        const responseData = response.data;
        console.log(response);
        responseData.forEach((item) => {
            const factItem = item.fact;
            const viewCatFact = document.createElement('p');
            viewCatFact.textContent = factItem;
            displayCatFact.appendChild(viewCatFact);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        displayCatFact.textContent = "Failed to load cat facts. Try again!";
    }
}
fetchApi();
async function fetchChuckJoke() {
    const displayChuckJoke = document.querySelector('#displayChuckJoke');
    displayChuckJoke.innerHTML = ""; // Clear previous joke

    try {
        const data = await fetch('https://api.chucknorris.io//jokes/random');
        const response = await data.json();
        console.log(response); // Debugging: check API response structure
        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("chuckJokeBtn").addEventListener("click", fetchChuckJoke);
        });
        if (!response || !response.value) {
            throw new Error("Invalid API response");
        }

        const jokeItem = document.createElement('p');
        jokeItem.textContent = response.value;
        displayChuckJoke.appendChild(jokeItem);
    } catch (error) {
        console.error("Error fetching data:", error);
        displayChuckJoke.textContent = "Failed to load Chuck Norris joke. Try again!";
    }
}
fetchApi();
