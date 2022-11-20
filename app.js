
// dropdown menu
const button = document.querySelector('.btn-dropdown')
const first = document.querySelector(".first")
button.addEventListener('click', () => {
    button.classList.toggle("active")
    first.classList.toggle('active')
})

// dropdown menu2
const button_second = document.querySelector('.second-btn')
const second = document.querySelector(".second")
button_second.addEventListener('click', () => {
    button_second.classList.toggle("active")
    second.classList.toggle("active")
})

// sidebar
const hamburger = document.querySelector(".hamburger")
const sidebar = document.querySelector(".sidebar")
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    sidebar.classList.toggle("active")
})


//sidebar dropdown
const dropdown_button = document.querySelector(".sub-menu-btn")
const sub_menu = document.querySelector(".sub-menu")
const arrowFirst = document.querySelector(".arrow_first")
dropdown_button.addEventListener('click', () => {
    sub_menu.classList.toggle("active")
    arrowFirst.classList.toggle("active")
})
//sidebar dropdown2
const dropdown_button_second = document.querySelector(".sub-menu-btn-second")
const sub_menu_second = document.querySelector(".sub-menu-second")
const arrowSecond = document.querySelector(".arrow_second")
dropdown_button_second.addEventListener("click", () => {
    sub_menu_second.classList.toggle("active")
    arrowSecond.classList.toggle("active")
})