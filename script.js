document.addEventListener("DOMContentLoaded", () => {
    const fetchCatFactBtn = document.getElementById("fetchCatFactBtn");
    const fetchChuckJokeBtn = document.getElementById("fetchChuckJokeBtn");

    if (fetchCatFactBtn && fetchChuckJokeBtn) {
        fetchCatFactBtn.addEventListener("click", fetchApi);
        fetchChuckJokeBtn.addEventListener("click", fetchChuckJoke);
    } else {
        console.error("Button elements not found. Check your HTML IDs.");
    }
});

async function fetchApi() {
    const displayCatFact = document.querySelector('#displayCatFact');
    displayCatFact.innerHTML = ""; // Clear previous facts

    try {
        const data = await fetch('https://catfact.ninja/facts');
        const response = await data.json();
        const responseData = response.data;

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

async function fetchChuckJoke() {
    const displayChuckJoke = document.querySelector('#displayChuckJoke');
    displayChuckJoke.innerHTML = ""; // Clear previous joke

    try {
        const data = await fetch('https://api.chucknorris.io/jokes/random');
        const response = await data.json();

        const jokeItem = document.createElement('p');
        jokeItem.textContent = response.value;
        displayChuckJoke.appendChild(jokeItem);
    } catch (error) {
        console.error("Error fetching data:", error);
        displayChuckJoke.textContent = "Failed to load Chuck Norris joke. Try again!";
    }
}
async function fetchTable() {
    const displayChuckJoke = document.querySelector('#displayTable');
    displayChuckJoke.innerHTML = ""; // Clear previous joke

    try {
        const data = await fetch('https://api.football-data.org/v4/matches');
        const response = await data.json();

        const tablecontent = document.createElement('p');
        jokeItem.textContent = response.value;
        displayTablecontent.appendChild(tablecontent);
    } catch (error) {
        console.error("Error fetching data:", error);
        displayChuckJoke.textContent = "Failed to load Chuck Norris joke. Try again!";
    }
}