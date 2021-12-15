function desabilitar() {
  marcas = ["Ferrari", "Porsche", "Audi", "Mercedes"];
  console.log("a");
  for (let i = 0; i < marcas.length; i++) {
    document.getElementById(marcas[i]).disabled = false;
  }

  IndiceMarcaCoche = document.formulario.cocheUno.selectedIndex;
  MarcaCoche = document.formulario.cocheUno.options[IndiceMarcaCoche].value;

  document.getElementById(MarcaCoche).disabled = true;
}

function pintarBlanco(arrayID) {
  for (let i = 0; i < arrayID.length; i++) {
    document.getElementById(arrayID[i]).style.backgroundColor = "white";
  }
}

function pintar() {
  array = [];
  arrayNombres = [
    "fecha",
    "rango",
    "telefono",
    "color",
    "Marca deshabilitado",
    "Marca Coche",
    "Modelo Coche",
  ];
  arrayId = ["fecha", "rango", "telefono", "color", "cocheDos"];

  array.push((fecha = document.formulario.fecha.value));
  array.push((rango = document.formulario.rango.value));
  array.push((telefono = document.formulario.telefono.value));
  array.push((color = document.formulario.color.value));
  array.push((MArcaDesabilitada = document.formulario.cocheUno.value));
  IndiceMarcaCoche = document.formulario.cocheDos.selectedIndex;
  array.push(
    (MarcaCoche =
      document.formulario.cocheDos.options[IndiceMarcaCoche].parentNode.label)
  );
  array.push(
    (ModeloCoche = document.formulario.cocheDos.options[IndiceMarcaCoche].value)
  );

  var pintar = document.getElementById("pintar");
  pintar.innerHTML = "";

  pintarBlanco(arrayId);

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "") {
      document.getElementById(arrayId[i]).style.backgroundColor = "red";
    } else {
      pintar.innerHTML += arrayNombres[i] + " -> " + array[i] + "</br>";
    }
  }
}

document.formulario.enviar.addEventListener("click", pintar, false);
document
  .getElementById("cocheUno")
  .addEventListener("change", desabilitar, false);
