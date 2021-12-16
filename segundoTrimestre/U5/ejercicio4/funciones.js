window.onload=iniciar;

function iniciar() {
  document.getElementById("enviar").addEventListener('click', validar, false);
  document.getElementById("enviar").addEventListener('click', pintar, false);
}

function validaFecha() {
  var elemento = document.getElementById("fecha");

  if (!elemento.checkValidity()) {
      if (elemento.validity.valueMissing) {
          error(elemento, "Debe introducir fecha")
      }
      elemento.blur();
      //error(elemento);
      return false;
  }
  return true;
}


function validaTelefono() {
  var elemento = document.getElementById("telefono");
  if (!elemento.checkValidity()) {
      if (elemento.validity.valueMissing) {
          error(elemento, "Debe introducir un teléfono")
      }
      if (elemento.validity.patternMismatch) {
          error(elemento, "El telefono debe tener 9 numeros");
      } //error(elemento);
      elemento.blur();
      return false;
  }
  return true;
}


function validaCoche() {
  var elemento = document.getElementById("cocheDos");
  debugger;
  if (elemento.value==null || elemento.value=="" ) {
          error(elemento, "Debe elegir un coche")
       //error(elemento);
       elemento.blur();
      return false;
  }
  return true;
}

function validar(e) {
  document.getElementById("mensajeError").innerHTML = ""; // lo ponemos vacio
  borrarError();
  if (validaFecha() &&  validaTelefono() && validaCoche()  && confirm("Pulsa aceptar si deseas enviar el formulario")) {
    console.log("entro"); 
    return true
  } else {
      e.preventDefault();
      return false;
  }
}

function error(elemento, mensaje) {
  document.getElementById("mensajeError").innerHTML = mensaje;
  elemento.className = "error";
  elemento.focus();
}

function borrarError() {
  var formulario = document.forms[0];
  for (var i = 0; i < formulario.elements.length; i++) {
      formulario.elements[i].className = "";
  }
}

function desabilitar() {
    marcas=["Ferrari","Porsche","Audi","Mercedes"];
    console.log("a");
    for (let i = 0; i < marcas.length; i++) {
      document.getElementById(marcas[i]).disabled = false;
    }

    
      IndiceMarcaCoche=document.formulario.cocheUno.selectedIndex;
      MarcaCoche=document.formulario.cocheUno.options[IndiceMarcaCoche].value;

      document.getElementById(MarcaCoche).disabled = true;
      
  }

  function pintar() {
      array=[];
      arrayNombres=["fecha", "rango" , "telefono","color","Marca deshabilitado","Marca Coche","Modelo Coche" ];
      array.push(fecha=document.formulario.fecha.value);
      array.push(rango=document.formulario.rango.value);
      array.push(telefono=document.formulario.telefono.value);
      array.push(color=document.formulario.color.value);
      array.push(MArcaDesabilitada=document.formulario.cocheUno.value);
      IndiceMarcaCoche=document.formulario.cocheDos.selectedIndex;
      array.push(MarcaCoche=document.formulario.cocheDos.options[IndiceMarcaCoche].parentNode.label);
      array.push(ModeloCoche=document.formulario.cocheDos.options[IndiceMarcaCoche].value);

      var pintar=document.getElementById("pintar");
      pintar.innerHTML="";
      
      for (let i = 0; i < array.length; i++) {
      pintar.innerHTML +=arrayNombres[i] + " -> "+ array[i] + '</br>';
          
      }
  }

  document.formulario.addEventListener("change", pintar, false);
  document.getElementById("cocheUno").addEventListener("change", desabilitar, false);