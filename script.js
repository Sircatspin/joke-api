function getJoke() {
    fetch('https://raw.githubusercontent.com/Sircatspin/joke-api/main/jokes.txt')
        .then(response => response.text())
        .then(data => {
            const jokes = data.split('\n');
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            document.getElementById('joke-container').innerHTML = randomJoke;
        })
        .catch(error => console.log(error));
}
