function visualizarArrayPorLineas(array) {
  document.write("Estos son los numeros");
<<<<<<< HEAD
  document.write("<br>");
  for (let index = 0; index < array.length; index++) {
    document.write(array[index]);
    document.write("<br>");
  }
}

function añadirAlArray(array, palabra) {
  array[array.length] = palabra;
  return array;
}

=======
  for (let index = 0; index < array.length; index++) {
    document.write(array[index]);
    document.write("<br>");
    
  }
}

>>>>>>> 62bd424 (añadido Tema4)
function abrirVentanaHija() {
  ancho = parseInt(window.screen.width / 2);
  alto = parseInt(window.screen.height / 2);
  open(
    "./ejercicio4/hija.html",
    "",
    "resizable=0,width=700, height=300,top=" + alto + ",left=" + ancho
  );
}

function abrir() {
  ancho = parseInt(window.screen.width / 2);
  alto = parseInt(window.screen.height / 2);
  open(
    "https://aulavirtual3.educa.madrid.org/ies.lagunadejoatzel.getafe/course/view.php?id=616",
    "kk",
    "width=700, height=300,top=" + alto + ",left=" + ancho
  );
}

function abrirPaginaBloqueada(src) {
  ancho = parseInt(window.screen.width / 2);
  alto = parseInt(window.screen.height / 2);
  ventanaHija = open(
    src,
    "",
    "resizable=0,width=700, height=300,top=" + alto + ",left=" + ancho
  );
}
function sendToHija() {
<<<<<<< HEAD
  ventanaHija.document.getElementById("mensajeRecibidoPadre").value =
    document.getElementById("mensajeEnviadoPadre").value;
}
function sendToPadre() {
  opener.document.getElementById("mensajeRecibidoHija").value =
    document.getElementById("mensajeEnviadoHija").value;
=======
  ventanaHija.document.getElementById("mensajeRecibidoPadre").value = document.getElementById("mensajeEnviadoPadre").value;
}
function sendToPadre() {
  opener.document.getElementById("mensajeRecibidoHija").value = document.getElementById("mensajeEnviadoHija").value;
>>>>>>> 62bd424 (añadido Tema4)
}
function haciaDelante() {
  window.history.forward();
}
function haciaDetras() {
  window.history.back();
}
function ejercicio3() {
  document.open();
  document.write("<h3>Ejemplo de ventana nueva</h3>");
  document.close();
}
function getDatos() {
  ejercicio3();
  document.write("<br>");
  url();
  document.write("<br>");
  protocol();
  document.write("<br>");
  nameCode();
  document.write("<br>");
  javaEnPagina();
  document.write("<br>");
}
function ejercicio3() {
  document.write("<h3>Ejemplo de ventana nueva</h3>");
}
function url() {
  document.write("URL: " + window.location);
}
function protocol() {
  protocolo = location.protocol;
  document.write("Protocolo : " + protocolo);
}
function nameCode() {
  codeName = navigator.appCodeNam;
  document.write("CodeName : " + codeName);
}
function javaEnPagina() {
  if (navigator.javaEnabled()) {
    document.write("<p>Java SI disponible en esta ventana</p>");
  } else {
    document.write("<p>Java NO disponible en esta ventana</p>");
  }
}
