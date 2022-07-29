// $ - Escriban en consola: nodemon 00

// * - El hecho de ser constante un array, solo evita que "listOne" no pueda igualarse a otra cosa, es decir: listOne = "Un String" da ERROR. Pero, podemos seguir cambiando los valores del array porque NO SON COONSTANTES!.

const listOne = [1, 2, 3, 4, 5];

// * - Función que retornará por por referencia.
function getMeArray(array) {
    //apuntan al mismo valor.
    return array;
}

const listBefore = getMeArray(listOne);

// * - Le cambio la primera posición y vemos que pasa...
listBefore[0] = 99;

const listAfter = getMeArray(listOne);

// $ - Con esto probamos si son idénticas, que por si no saben, estamos pasando un array (puede ser cualquier cosa) a 1 string (en formato JSON), probando que todos los carácteres sean iguales.
console.log(JSON.stringify(listBefore) === JSON.stringify(listAfter)); // ? true. Son iguales!
 
// * - consologeando nos queda que :
console.log(listBefore[0])  // ! | 99;
console.log(listAfter[0])   // ! | 99;

// ! - Es decir, listBefore y listAfter son iguales porque apuntan al mismo PUNTERO, por eso al pasar por REFERENCIA las dos se modifican!.


// $ - Prueba json.
console.log(JSON.stringify(listBefore));
console.log(JSON.stringify(listAfter));

// * - Probemos que es un string con typeof.
console.log("Es un",typeof JSON.stringify(listBefore));
