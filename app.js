

const button = document.querySelector('.btn-dropdown')
const first = document.querySelector(".first")
button.addEventListener('click', () => {
    button.classList.toggle("active")
    first.classList.toggle('active')
})
const button_second = document.querySelector('.second-btn')
const second = document.querySelector(".second")
button_second.addEventListener('click', () => {
    button_second.classList.toggle("active")
    second.classList.toggle("active")
})