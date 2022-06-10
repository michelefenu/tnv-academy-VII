const searchParams = new URLSearchParams(window.location.search);
const itemId = Object.fromEntries(searchParams.entries()).menuItemId;

const buildPage = (data) => {
    const nomePiatto = document.getElementById('nomePiatto');
    nomePiatto.innerText = data.title;

    const descrizione = document.getElementById('descrizione');
    descrizione.innerText = data.description;

    const immagine = document.getElementById('immagine');
    immagine.src = data.imageUrl;
}

fetch(`https://my-json-server.typicode.com/michelefenu/tnv-academy-VII/piatti/${itemId}`)
  .then(res => res.json())
  .then(res => buildPage(res))
  .catch(err => console.log(err));