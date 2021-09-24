const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

function generateJoke(){
    let url = "https://icanhazdadjoke.com/";

    const config = {
        headers: {
        'Accept':'application/json'
        }
    };

    fetch(url, config)
    .then(response => response.json())
    .then(data => {
        jokeEl.innerHTML = data.joke
    });
}
