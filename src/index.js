const searchInput = document.querySelector("[data-search]")
let manga = []

searchInput.addEventListener("input", e => {
    const value = e.target.value
    console.log(value)
})

