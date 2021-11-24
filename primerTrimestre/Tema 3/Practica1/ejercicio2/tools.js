function entreCeroDiez(numero) {
    if((numero>=0 && numero<=10 )){
        return true;
    }
    return false;
}

function suspenso(nota) {
    if (nota<4) {
        return true;
    }
    return false;
}

function recogerDatos(){
    var resultadoPractica1=Number(document.getElementById("practica1").value) ;
    var resultadoPractica2= Number(document.getElementById("practica2").value) ;
    var resultadoEvaluacion= Number(document.getElementById("evaluacion").value) ;
    var notaComportamiento= Number(document.getElementById("comportamiento").value) ;
    var notaFinal;


    if (entreCeroDiez(resultadoPractica1)&& entreCeroDiez(resultadoPractica2) && entreCeroDiez(resultadoEvaluacion)&&entreCeroDiez(notaComportamiento)) {
        
        //si han sacado mas de un 4 en todos los examenes
        if ((resultadoEvaluacion >=4 && resultadoPractica1 >=4 && resultadoPractica2 >=4  )) {
    
    
            //Hacemos la media de las dos practicas
            var mediaDosExamenes=(resultadoPractica1 + resultadoPractica2 )/2;
    
            //Hacemos el porcentaje de las practicas
            var porcentajePractica=mediaDosExamenes*0.45;
    
            var porcentajeEvaluacion=0.45*resultadoEvaluacion;
    
            var notaPracticaEvaluacion=porcentajePractica+porcentajeEvaluacion;
            
            notaComportamiento=notaComportamiento*0.1;
            //si la notas son mas de 5 se le añade comportamiento 
            if ( notaPracticaEvaluacion >= 4.5) {
                notaFinal=porcentajeEvaluacion+porcentajePractica+notaComportamiento;
    
                document.getElementById("resultado").innerHTML="La media es de : "+ notaFinal ;
                
            }else{
                // has sacado entre 4 y 4.9 en la media
                notaFinal=porcentajeEvaluacion+porcentajePractica;
    
                document.getElementById("resultado").innerHTML="La media es de : "+ notaFinal ;
                
            }
            
        }else{

            if (suspenso(resultadoPractica1)) { stringResultadoSuspensos="Has suspendido el primer examen ";   }

            if (suspenso(resultadoPractica2) && suspenso(resultadoPractica1)) {
                         stringResultadoSuspensos+=", segundo examen ";  
                 }else if(suspenso(resultadoPractica2)){
                        stringResultadoSuspensos="Has suspendido el segundo examen ";
                    }
            if (suspenso(resultadoEvaluacion)) {

                if (suspenso(resultadoPractica1) || suspenso(resultadoPractica2)) {
                    stringResultadoSuspensos+="y el examen evaluacion ";  
                }else{
                    stringResultadoSuspensos="Has suspendido el examen de evaluacion ";
                }
            }
            document.getElementById("resultado").innerHTML=stringResultadoSuspensos;
            

            // no has sacado mas de un 4 en algun examen
            //document.getElementById("resultado").innerHTML="Has suspendido ";
        }

    }else{
        alert("Ingresa bien los numeros");
    }

    
    
}