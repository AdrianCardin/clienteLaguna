function comenzar() {
    zonaDatos = document.getElementById("zonaDatos");
    archivos = document.getElementById("archivos");
    archivos.addEventListener("change", procesar, false);
  }

  function procesar(e) {
    var archivos = e.target.files; //obtiene el archivo en forma de array
    var mi_archivo = archivos[0];
    var lector = new FileReader(); // se crea un lector
    lector.readAsText(mi_archivo); // devuelve la informacion del archivo en modo txt
    lector.addEventListener("load", mostrar_en_web, false);
  }

  function mosntrar_en_web(e) {
    var resultado = e.target.result;
    zonaDatos.innerHTML=resultado;
  }

  window.addEventListener("load", comenzar, false);