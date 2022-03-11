// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un  array (pasado por parametro)
    // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
}


function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1;
    }
    return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
}


function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    let aux = "";
    for (let i = 0; i < palabras.length - 1; i++) {
        aux += palabras[i] + " ";
    }
    aux += palabras[palabras.length - 1];
    return aux;
}


function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    return array.indexOf(elemento) != -1;
}


function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    let aux = 0;
    for (let i = 0; i < numeros.length; i++) {
        aux += numeros[i];
    }
    return aux;
}


function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let aux = 0;
    for (let i = 0; i < resultadosTest.length; i++) {
        aux += resultadosTest[i];
    }
    return aux / resultadosTest.length;
}


function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    let aux = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] >= aux) {
            aux = numeros[i];
        }
    }
    return aux;
}


function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
       // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    if (arguments.length > 0) {
        let aux = 1;
        for (let i = 0; i < arguments.length; i++) {
            aux *= arguments[i];
        }
        return aux;
    } else {
        return 0;
    }
}


function cuentoElementos(arreglo) {
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
    let aux = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > 18) {
            aux++;
        }

    }
    return aux;
}


function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    return (numeroDeDia === 1 || numeroDeDia === 7) ? "Es fin de semana" : "Es dia Laboral";
}


function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    let aux = n.toString();
    return aux[0] == "9";
}


function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] != arreglo[0]) {
            return false;
        }
    }
    return true;
}


function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    let auxArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre") {
            auxArr.push(array[i]);
        }
    }
    if (auxArr.indexOf("Enero") != -1 && auxArr.indexOf("Marzo") != -1 && auxArr.indexOf("Noviembre") != -1) {
        return auxArr;
    } else {
        return "No se encontraron los meses pedidos";
    }
}


function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    let arrayAux = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 100) {
            arrayAux.push(array[i]);
        }

    }
    return arrayAux;
}


function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    let auxArr = [];
    let i = 1;
    let aux = 0;
    while (i < 11) {
        aux = numero + (i * 2);
        if (i == aux) {
            return "Se interrumpió la ejecución";
            break;
        } else {
            auxArr.push(aux);
        }
        i++;
    }
    return auxArr;

}


function continueStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    let auxArr = [];
    let i = 0;
    let aux = numero;
    while (i < 10) {
        i++;
        if (i === 5) {
            continue;
        } else {
            aux += 2;
            auxArr.push(aux);
        }
    }
    return auxArr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
    cuentoElementos,
    diaDeLaSemana,
    empiezaConNueve,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
    continueStatement
};