const log = document.getElementById("searchQueryInput");
const input = document.querySelector("[data-search]");
const jikanAPI = 'https://api.jikan.moe/v4/manga';
const HEADERS = {
  'Content-Type': 'application/json'
};

input.addEventListener('input', updateValue);

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

function updateValue(e) {
  console.log(e)
  if(e.key == 'Enter' || e.keyCode == 13) {
    console.log(e)
  }
}