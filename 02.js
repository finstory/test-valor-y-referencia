// $ - Escriban en consola: nodemon 03

// ! IMPORTANTE: Clonar un array NO CAMBIA los punteros de memoria de los objetos!, por eso también hay que clonar los objetos si no queremos que cambien...

const listOne = [{ num: 1 }, { num: 2 }];

// * - Esta función retornará un clon de todos los objetos que posee.
function getMeArrayCopy(array) {
    let copyAcc = [];

    //clonación de cada objecto.
    for (let i = 0; i < array.length; i++)
        copyAcc[i] = Object.assign({}, array[i]);
    return copyAcc;
}


const listBefore = getMeArrayCopy(listOne);

// * - Le cambio la primera posición y vemos que pasa...
listBefore[0] = { num: 99 };

const listAfter = getMeArrayCopy(listOne);

// $ - Probamos si son idénticos.
console.log(JSON.stringify(listBefore) === JSON.stringify(listAfter)); // ? false. Son distintos!

// * - consologeando nos queda que :
console.log(listBefore)  // ! |  [ { num: 99 }, { num: 2 } ]
console.log(listAfter)   // ! |  [ { num: 1 }, { num: 2 } ]

// ! Es decir, como CLONAMOS, ahora los puntermos de memoria de cada objeto son diferentes.

// $ - Prueba json.
console.log(JSON.stringify(listBefore));
console.log(JSON.stringify(listAfter));

