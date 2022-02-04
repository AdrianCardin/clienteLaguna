window.onload=iniciar;

function iniciar(){
    crearParrafos.addEventListener("click",crearParrafo);
    crearImagenes.addEventListener("click",crearImagen);
    borrarUltimos.addEventListener("click",borrarUltimo);

    borrarPrimeros.addEventListener("click",borrarPrimero);
    sustituirPrimeroVacios.addEventListener("click",sustituirPrimeroVacio);
    
}

function crearParrafo(){
    debugger;
    
    var parrafo = document.createElement("p");
    var txt = document.createTextNode(texto.value);
    parrafo.appendChild(txt);
    document.getElementById('myDiv').appendChild(parrafo);
    document.getElementById('myDiv').className="miClase";
}

function crearImagen(){
    parrafo1.setAttribute("class","miClase");
    document.getElementById("parrafo2").className="miClase";
}

function borrarUltimo(){
    parrafo1.setAttribute("class","");
    parrafo2.className="";
    parrafo3.className="";
}
function borrarPrimero(){
    parrafo1.setAttribute("class","");
    parrafo2.className="";
    parrafo3.className="";
}

function sustituirPrimeroVacio(){
    parrafos=document.getElementsByTagName("p");
    
    for (let index = 0; index < parrafos.length; index++) {
        parrafos[index].className="";
    }
}