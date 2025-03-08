let indexInfo = 0
let indexFotos = 0
const imagensDeInfo = document.querySelectorAll(".informacoes .carrossel img")
const imagensDeFotos = document.querySelectorAll(".fotos .carrossel img")

function trocarImagemDeInfo() {
  imagensDeInfo[indexInfo].classList.remove("ativo")
  indexInfo = (indexInfo + 1) % imagensDeInfo.length
  imagensDeInfo[indexInfo].classList.add("ativo")
}

function trocarImagemDeFotos() {
  imagensDeFotos[indexFotos].classList.remove("ativo")
  indexFotos = (indexFotos + 1) % imagensDeFotos.length
  imagensDeFotos[indexFotos].classList.add("ativo")
  imagensDeFotos[indexFotos].classList.remove("proxima")
  //verificar
  imagensDeFotos[(indexFotos + 1) % imagensDeFotos.length].classList.add(
    "proxima"
  )
}

setInterval(trocarImagemDeInfo, 15000)
setInterval(trocarImagemDeFotos, 4000)
