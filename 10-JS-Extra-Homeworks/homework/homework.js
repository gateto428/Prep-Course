// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
    // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
    let aux = [];
    for (let key in objeto) {
        aux.push([key, objeto[key]]);
    }
    return aux;
}

function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
    let auxFunc = function(letter, string) {
        let aux = 0;
        for (var i = 0; i < string.length; i++) {
            if (letter === string[i]) {
                aux++;
            }
        }
        return aux;
    }
    let obj = {};
    for (var i = 0; i < string.length; i++) {
        if (Object.keys(obj).indexOf(string[i]) === -1) {
            obj[string[i]] = auxFunc(string[i], string);
        }
    }
    return obj;
}


function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
    let mayu = "";
    let min = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            mayu += s[i];
        } else {
            min += s[i];
        }
    }
    if (s[s.length - 1] === mayu[mayu.length - 1]) {
        return mayu + min;
    } else {
        return min + mayu;
    }
}

function asAmirror(str) {
    //La función recibe una frase. 
    //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
    //pero con cada una de sus palabras invertidas, como si fuera un espejo.
    //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
    //Escribe tu código aquí
    let aux1 = "";
    let reverse = function(text) {
        var aux = "";
        for (let i = text.length - 1; i >= 0; i--) {
            aux += text[i];
        }
        return aux;
    }

    let arr = str.split(' ');
    for (let i = 0; i < arr.length - 1; i++) {
        aux1 += reverse(arr[i]) + " ";
    }
    return aux1 + reverse(arr[arr.length - 1]);
}


function capicua(numero) {
    //Escribe una función, la cual recibe un número y determina si es o no capicúa.
    //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
    //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
    //Escribe tu código aquí
    let digits = (num) => {
        //console.log((123 % 10))
        let aux = ""
        do {
            aux += num % 10;
            num = Number.parseInt(num / 10);

        } while (num !== 0);
        return aux;
    }

    let aux = numero;
    return numero.toString() == digits(aux) ? "Es capicua" : "No es capicua";
}


function deleteAbc(cadena) {
    //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
    //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
    //Escribe tu código aquí
    let aux = "";
    for (let i = 0; i < cadena.length; i++) {
        if (["a", "b", "c"].indexOf(cadena[i]) === -1) {
            aux += cadena[i];
        }
    }
    return aux;
}


function sortArray(arr) {
    //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
    //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
    //Escribe tu código aquí
    return arr.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(arreglo1, arreglo2) {
    //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
    //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
    //Si no tienen elementos en común, retornar un arreglo vacío.
    //Aclaración: los arreglos no necesariamente tienen la misma longitud
    //Escribe tu código aquí  
    let aux = [];
    for (let i = 0; i < arreglo1.length; i++) {
        if (arreglo2.indexOf(arreglo1[i]) != -1) {
            aux.push(arreglo1[i]);
        }
    }
    return aux;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    deObjetoAmatriz,
    numberOfCharacters,
    capToFront,
    asAmirror,
    capicua,
    deleteAbc,
    sortArray,
    buscoInterseccion,
};