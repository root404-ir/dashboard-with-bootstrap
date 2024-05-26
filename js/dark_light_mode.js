let lightMode = document.getElementById('lightModeBtn')
let darkMode = document.getElementById('darkModeBtn')
let lightModeAlert = document.getElementById('lightModeAlert')
let darkModeAlert = document.getElementById('darkModeAlert')
darkMode.addEventListener("click", function () {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
    lightMode.classList.remove('d-none')
    darkMode.classList.add('d-none')
    lightModeAlert.classList.add('d-none')
    darkModeAlert.classList.remove('d-none')
})
lightMode.addEventListener("click", function () {
    document.documentElement.setAttribute('data-bs-theme', 'light')
    darkMode.classList.remove('d-none')
    lightMode.classList.add('d-none')
    darkModeAlert.classList.add('d-none')
    lightModeAlert.classList.remove('d-none')
})




const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}
const alertTrigger = document.getElementById('lightModeBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('شما در حال استفاده از حالت روشن هستید', 'success')
    })
}