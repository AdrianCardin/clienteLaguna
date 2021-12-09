function desabilitar() {
    marcas=["Ferrari","Porsche","Audi","Mercedes"];

    for (let i = 0; i < marcas.length; i++) {
      document.getElementById(marcas[i]).disabled = false;
    }

    
      IndiceMarcaCoche=document.formulario.cocheUno.selectedIndex;
      MarcaCoche=document.formulario.cocheUno.options[IndiceMarcaCoche].value;

      document.getElementById(MarcaCoche).disabled = true;
      
  }

  function pintar() {
      array=[];
      arrayNombres=["fecha", "rango" , "telefono","color","Marca Coche","Modelo Coche" ];
      array.push(fecha=document.formulario.fecha.value);
      array.push(rango=document.formulario.rango.value);
      array.push(telefono=document.formulario.telefono.value);
      array.push(color=document.formulario.color.value);
      IndiceMarcaCoche=document.formulario.cocheDos.selectedIndex;
      array.push(MarcaCoche=document.formulario.cocheDos.options[IndiceMarcaCoche].parentNode.label);
      array.push(ModeloCoche=document.formulario.cocheDos.options[IndiceMarcaCoche].value);

      var pintar=document.getElementById("pintar");
      pintar.innerHTML="";
      debugger;
      for (let i = 0; i < array.length; i++) {
      pintar.innerHTML +=arrayNombres[i] + " -> "+ array[i] + '</br>';
          
      }
  }

document.getElementById("formulario").addEventListener("onchange", pintar, false);