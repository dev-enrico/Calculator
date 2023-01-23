function insert(number) {
  var numero = document.getElementById("Resultado").innerHTML
  document.getElementById("Resultado").innerHTML = numero + number
}
function clean() {
  document.getElementById("Resultado").innerHTML = ""
}
function back() {
  var resultado = document.getElementById("Resultado").innerHTML
  document.getElementById("Resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}
function calcular() {
  var Resultado = document.getElementById("Resultado").innerHTML
  if (Resultado) {
    document.getElementById("Resultado").innerHTML = eval(Resultado)
  } else {
    document.getElementById("Resultado").innerHTML = "Nada..."
  }
}
