let lightMode = document.getElementById('lightModeBtn')
let darkMode = document.getElementById('darkModeBtn')
darkMode.addEventListener("click", function () {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    darkMode.classList.add('active')
    lightMode.classList.remove('active')
    localStorage.setItem('themeMode', 'dark')
})
lightMode.addEventListener("click", function () {
    document.documentElement.setAttribute('data-bs-theme', 'light')
    lightMode.classList.add('active')
    darkMode.classList.remove('active')
    localStorage.setItem('themeMode', 'dark')
})

let saveThemMode = localStorage.getItem('themeMode')
if (saveThemMode == 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    darkMode.classList.add('active')
    lightMode.classList.remove('active')
} else {
    document.documentElement.setAttribute('data-bs-theme', 'light')
    lightMode.classList.add('active')
    darkMode.classList.remove('active')
}