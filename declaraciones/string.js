//todo mayusculas
cadena.toUpperCase();

//todo minusculas
cadena.toLowerCase();

// charAt
'cat'.charAt(1) // devuelve "a"

//split  
//El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
var arrayDeCadenas = cadenaADividir.split(separador);

// ultimo indice
String.prototype.lastIndexOf(searchValue[, fromIndex]);

//replace 
String.prototype.replace(searchFor, replaceWith);

//
var cadena1 = "La mañana se nos echa encima.";
var cadena2 = cadena1.slice(3, -2);
console.log(cadena2);
// mañana se nos echa encim