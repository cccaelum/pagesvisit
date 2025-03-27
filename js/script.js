const contadorVisitas = document.getElementById("contadorVisitas")
const btnReestablecer = document.getElementById("btnReestablecer")

let visita = parseInt(localStorage.getItem("visit")) || 0
function addVisita () {
  visita++
  localStorage.setItem("visit", visita)
  contadorVisitas.innerText = visita
}

btnReestablecer.addEventListener("click", () => {
  // localStorage.setItem("visit", 0)
  // localStorage.clear()
  localStorage.removeItem("visit")
  contadorVisitas.innerText = 0
})

addVisita()