// jshint esversion:8

const jokes = document.getElementById('jokes-input');
const btn = document.getElementById('btn');

gettingJokes();

async function gettingJokes() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	const res = await fetch('https://icanhazdadjoke.com/', config);

	const data = await res.json();

	jokes.innerText = data.joke;
}

btn.addEventListener('click', gettingJokes);
