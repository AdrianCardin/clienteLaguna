//declarar array
var prueba3=new Array();
var prueba2=[];

// push 
prueba2.push("hola");

// añadir al principio del array
prueba2.unshift("Calamar");

//Localiza un cierto dato dentro del array.
prueba2.indexOf("ASUS");

//Elimina los últimos tres datos del array.
      copiaArray=prueba2;
      var posiciones= copiaArray.length-3;
      copiaArray.splice(posiciones);
      document.write(copiaArray);

// splice
        const months = ['Jan', 'March', 'April', 'June'];
        months.splice(1, 0, 'Feb');
        // inserts at index 1
        console.log(months);
        // expected output: Array ["Jan", "Feb", "March", "April", "June"]

        months.splice(2, 2, 'May');
        // replaces 1 element at index 4
        console.log(months);
        // expected output: Array ["Jan", "Feb", "March", "April", "May"]

//