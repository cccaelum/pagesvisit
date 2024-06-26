const counter = document.getElementById('contadorVisitas')
const resetBtn = document.getElementById('btnReestablecer')

/*const countVisit = () => {
localStorage.setItem('counter',(parseInt(localStorage.getItem('counter')) || 0)+ 1)
console.log(localStorage.getItem('counter'))
counter.innerHTML = localStorage.getItem('counter')
}*/

const resetVisit = () => {
localStorage.setItem('counter', 0)
counter.innerHTML = localStorage.getItem('counter')
}

resetBtn.addEventListener('click', resetVisit)
/*window.addEventListener('load', countVisit)*/

/*Codigo de Data*/

let getCountLocal = parseInt(localStorage.getItem('counter')) || 0

getCountLocal++

localStorage.setItem('counter', getCountLocal)
contadorVisitas.textContent = localStorage.getItem('counter')