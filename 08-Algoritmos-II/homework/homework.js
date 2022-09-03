'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2)
    return array;
  else{
    let pivote = parseInt(Math.random() * array.length);
    let arrayL = [];
    let arrayR = [];
    for (let i = 0; i < array.length; i++) {
      if (i != pivote)
        array[i] <= array[pivote] ? arrayL.push(array[i]) : arrayR.push(array[i])
    }
    return quickSort(arrayL).concat(array[pivote],quickSort(arrayR))
  }
}


function merge(arrayL, arrayR){
  let arrayN = [];
  while (arrayL.length && arrayR.length){
    arrayL[0] < arrayR[0] ? arrayN.push(arrayL.shift()) : arrayN.push(arrayR.shift())
  }
  return arrayN.concat(arrayL, arrayR);
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2)
    return array;
  else{
    let mitadL = array.slice(0, parseInt(array.length / 2));
    let mitadR = array.slice(parseInt(array.length / 2));
    return merge(mergeSort(mitadL), mergeSort(mitadR));
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
