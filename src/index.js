const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", e => {
    const value = e.target.value
    console.log(value)
})

getManga(searchInput);

async function getManga(searchInput) {
  const temp = await fetch(
    'https://api.jikan.moe/v4/manga/${searchInput}/full'
    )
}
