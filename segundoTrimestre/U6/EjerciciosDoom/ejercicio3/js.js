window.onload = iniciar;

function iniciar() {
for (let i = 0 ; i < document.getElementsByTagName("h2").length ; i++) {
  document.getElementsByTagName("h2")[i].addEventListener("click",recorrerAdelante)
}
}

function recorrerAdelante(evento){
  var texto="";
  var h2=e.target;
  texto += "Has elegido "+h2.textContent;
  var padre= h2.parentElement;
  texto += " que está situada en el "+padre.id + "<br/>";

  var ul=h2.nextElementSibling;

  text += "El número de provincias es " + ul.children.length+": ";

  var hijo=ul.firstChild;

  while(hijo != null){
    texto += " "+hijo.textContent;
    hijo = hijo.nextElementSibling;
  }
  
}