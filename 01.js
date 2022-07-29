// $ - Escriban en consola: nodemon 01
// Dato importante, todas las variables nativas siempre se pasan por valor.

let listOne = [1, 2, 3, 4, 5];


// * - Esta función retornara un Clon del array que reciba.
function getMeArrayCopy(array) {
    //Con un assign podemos crear un array vació, llenarlo con el nuestro y almacenarlo en un nuevo puntero de memoria.
    // return array.concat([]); // ? Esto tmb funciona.
    return Object.assign([], array);
}

const listBefore = getMeArrayCopy(listOne);
 
// * - Le cambio la primera posición y vemos que pasa...
listBefore[0] = 99;

const listAfter = getMeArrayCopy(listOne); 

// $ - Probamos si son idénticos.
console.log(JSON.stringify(listBefore) === JSON.stringify(listAfter));// ? false. Son distintos!

// * - consologeando nos queda que :
console.log(listBefore[0])  // ! | 99;
console.log(listAfter[0])   // ! | 1;

// ! Es decir, como CLONAMOS, ahora los puntermos de memoria de cada array son distintos. Eso es pasar por valor.



// $ - Prueba json.
console.log(JSON.stringify(listBefore));
console.log(JSON.stringify(listAfter));