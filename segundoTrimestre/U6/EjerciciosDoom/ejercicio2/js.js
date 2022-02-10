window.onload = iniciar;

function iniciar() {
  crearParrafos.addEventListener("click", crearParrafo);
  crearImagenes.addEventListener("click", crearImagen);
  borrarUltimos.addEventListener("click", borrarUltimo);
  borrarPrimeros.addEventListener("click", borrarPrimero);
  sustituirPrimeroVacios.addEventListener("click", sustituirPrimeroVacio);
}

function crearParrafo() {
  var parrafo = document.createElement("p");
  var txt = document.createTextNode(texto.value);
  parrafo.appendChild(txt);
  myDiv.appendChild(parrafo);
  myDiv.className = "miClase";
}

function crearImagen() {
  var imagen = document.createElement("img");

  var url = prompt("escribe el nombre del personaje de Star Wars");

  while (url === "") {
    var url = prompt("escribe el nombre del personaje de Star Wars");
  }
  imagen.setAttribute("class", "imagen miClase");
  imagen.src = "/imagenes/" + url + ".png";
  myDiv.appendChild(imagen);
}

function borrarUltimo() {
  myDiv.removeChild(myDiv.lastChild);
}
function borrarPrimero() {
    myDiv.removeChild(myDiv.firstChild);
}

function sustituirPrimeroVacio() {
  debugger;
  parrafos = document.getElementsByTagName("p");
  var txt = texto.value;
  parrafos[0].innerHTML=txt;

}
