let botonContador = document.getElementById("botoncontar");
let contador: number = 0;

function contarClicks() {
  contador++;
  let contadorParrafo: number = (document.getElementById(
    "contador"
  ).innerHTML = contador);
}
botonContador?.addEventListener("click", contarClicks);
