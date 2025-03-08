function adicionarZero(numero) {
  return numero.toString().padStart(2, "0")
}

function atualizarContador() {
  const dataInicio = new Date("2025-01-02T00:00:00")
  const agora = new Date()
  const diff = agora - dataInicio

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const segundos = Math.floor((diff % (1000 * 60)) / 1000)

  document.querySelector(".contador h1").innerHTML = `
  Estamos juntos há:<br/>
  <span>${dias}</span> dias, 
  <span>${adicionarZero(horas)}</span>h
  <span>${adicionarZero(minutos)}</span>m
  <span>${adicionarZero(segundos)}</span>s
  `
}
atualizarContador()
setInterval(atualizarContador, 1000)
