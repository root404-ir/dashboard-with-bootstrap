let home = document.getElementById('home')
let dashboard = document.getElementById('dashboard')
let orders = document.getElementById('orders')
let curses = document.getElementById('curses')
let customers = document.getElementById('customers')


dashboard.addEventListener("click", function () {
    dashboard.classList.add('active')
    curses.classList.remove('active')
    home.classList.remove('active')
    orders.classList.remove('active')
    customers.classList.remove('active')
})
home.addEventListener("click", function () {
    home.classList.add('active')
    dashboard.classList.remove('active')
    orders.classList.remove('active')
    curses.classList.remove('active')
    customers.classList.remove('active')
})
orders.addEventListener("click", function () {
    orders.classList.add('active')
    dashboard.classList.remove('active')
    curses.classList.remove('active')
    home.classList.remove('active')
    customers.classList.remove('active')
})
curses.addEventListener("click", function () {
    curses.classList.add('active')
    orders.classList.remove('active')
    customers.classList.remove('active')
    home.classList.remove('active')
    dashboard.classList.remove('active')

})
customers.addEventListener("click", function () {
    customers.classList.add('active')
    curses.classList.remove('active')
    home.classList.remove('active')
    dashboard.classList.remove('active')
    orders.classList.remove('active')
})