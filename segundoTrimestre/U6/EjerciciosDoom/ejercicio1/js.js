window.onload=iniciar;

function iniciar(){
    cambiarTexto.addEventListener("click",cambiarTextos);
    cambiarClase.addEventListener("click",cambiarClases);
    quitarClase.addEventListener("click",quitarClasesMasivo);
}

function cambiarTextos(){
    parrafo1.textContent="Primer parrado cambiado";
    document.getElementsByTagName("p")[1].textContent="Segundo parrafo cambiado";
    document.getElementsByClassName("miClase")[0].textContent="Tercero parrafo cambiado";
}

function cambiarClases(){
    parrafo1.setAttribute("class","miClase");
    document.getElementById("parrafo2").className="miClase";
}

function quitarClases(){
    parrafo1.setAttribute("class","");
    parrafo2.className="";
    parrafo3.className="";
}

function quitarClasesMasivo(){
    parrafos=document.getElementsByTagName("p");
    
    for (let index = 0; index < parrafos.length; index++) {
        parrafos[index].className="";
    }
}