//Adrian Cardin 
//obtenemos los datos del archivo

//variables globales
arrayDatosFinales=[];
archivos="";
VO2MAX="";
const peso=80;
contadorPasadas=0;

//Formula=(10.8 * potencia / PESO )+ 7 
function usarFormula() {
    const numero= 10.8;
    potencia=arrayDatosFinales[contadorPasadas][2];
    return (numero * potencia / peso)+7;
    
}

/*function iniciar() {
    document.getElementById('file-input').addEventListener('change', comenzar, false); 
 }*/

function iniciar() {
    // obtenemos los id para poder encribir
    var valorFichero=document.getElementById("file-input");
    var distancia=document.getElementById("distancia");
    var potencia=document.getElementById("potencia");
    var duracion=document.getElementById("duracion");
    var ftp=document.getElementById("ftp");
    
    valorFichero.addEventListener("change", procesar, false);
  }

  function procesar(e) {
    var archivos = e.target.files; //obtiene el archivo en forma de array
    var mi_archivo = archivos[0];
    var lector = new FileReader(); // se crea un lector
    lector.readAsText(mi_archivo); // devuelve la informacion del archivo en modo txt
    lector.addEventListener("load", mostrar_en_web, false);
  }

  function mostrar_en_web(e) {
    var resultado = e.target.result;
    
    //optemos linea por linea
    datosTiempos= resultado.split(",");
    // lo vamos a dividir por los separadores de cada tiempo
    for (let i = 0; i < datosTiempos.length; i++) {
        // aqui separmos los campos
        datosSingulares=datosTiempos[i].split("|");
        // lo metemos en el array de datos finales
        arrayDatosFinales.push(datosSingulares);
        
    }
    // ya deberiamos tener el array de array con todos los datos

    //te pito los primeros digitos
    document.getElementById("distancia").value=arrayDatosFinales[0][0];
    document.getElementById("duracion").value=arrayDatosFinales[0][1];
    document.getElementById("potencia").value=arrayDatosFinales[0][2];
    document.getElementById("ftp").value=usarFormula();
    console.log(arrayDatosFinales);
    debugger;
    
  }

  /*function cargar_datos_input() {
    
    var distancia=document.getElementById('distancia');
    var duracion=document.getElementById("duracion");
    var potencia=document.getElementById("potencia");
    var ftp=document.getElementById("ftp");

      
          distancia.innerHTML=arrayDatosFinales[contadorPasadas][0];
          duracion.innerHTML=arrayDatosFinales[contadorPasadas][1];
          potencia.innerHTML=arrayDatosFinales[contadorPasadas][2];
          ftp.innerHTML=usarFormula();   
          contadorPasadas++;
          debugger;
        
      
      
    
  }*/