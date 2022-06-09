const urlSearchParams = new URLSearchParams(window.location.search); 
const params = Object.fromEntries(urlSearchParams.entries());

const buildPage = (data) => {
    const title = document.getElementById('title');
    title.innerText = data.title;

    const description = document.getElementById('description');
    description.innerText = data.description;
}

const data = fetch(`https://my-json-server.typicode.com/michelefenu/tnv-academy-VII/piatti/${params.itemId}`)
    .then(res => res.json())
    .then(res => buildPage(res))
