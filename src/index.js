const title = document.querySelector("[data-search]");
const jikanAPI = 'https://api.jikan.moe/v4/manga';
const HEADERS = {
  'Content-Type': 'application/json'
};

title.addEventListener("input", e => {
    const value = e.target.value
    console.log(value)
});

const manga = {
  title
}

const query = "Naruto"
findManga(query)

function findManga(query) {
  fetch(`https://api.jikan.moe/v4/manga?q=${query}`).then(response => {
    if(!response.ok) {
      throw new Error('Request failed')
    }
    return response.json()
  }).then(data => {
    console.log(data)
  }).catch(error => console.log(error));
}
