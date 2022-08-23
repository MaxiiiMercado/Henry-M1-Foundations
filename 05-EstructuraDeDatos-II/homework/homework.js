"use strict";

/*
Implementar la clase LinkedList, definiendo los nexts métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su value (tener en cuenta el caso 
    particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: 
  el parámetro puede ser un value o un callback. En el primer caso, buscamos un nodo cuyo 
  value coincida con lo buscado; en el segundo, buscamos un nodo cuyo value, al ser pasado 
  como parámetro del callback, retorne true. 

  Ejemplo: 
  search(3) busca un nodo cuyo value sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por 
  parámetro un número par, busca un nodo cuyo value sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value){
  const nodo = new Node(value);
  let current = this.head;

  if (!current)
    this.head = nodo;
  else{
    while (current.next)
      current = current.next;
    current.next = nodo;
  }
}

LinkedList.prototype.remove = function(){
  let current = this.head;

  if (!current)
    return null;
  
  let value;
  while(current.next){
    if (current.next.next)
      current = current.next;
    else{
      value = current.next.value;
      current.next = null;
      return value;
    }
  }

  value = this.head.value;
  this.head = null;
  return value;
} 

LinkedList.prototype.search = function(parametro){
  if (!this.head)
    return null;

  let current = this.head;
  do{
    if (typeof parametro === 'string' && current.value === parametro || typeof parametro === 'function' && parametro(current.value))
      return current.value;
    current.next ? current = current.next : current = null;
  } while (current)
  return null; 
} 


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; 
es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-value 
(por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
(Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco 
la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los nexts métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, 
  suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula 
  el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla 
  en la que se almacenará el dato.
  - set: recibe el conjunto clave value (como dos parámetros distintos), hashea la clave invocando al método hash, 
  y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el value que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. head puedo chequear, con hasKey, si ya hay algo en 
la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-value en un 
bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.table = [];
}

HashTable.prototype.hash = function(key){
  return key.split('').map( e => e.charCodeAt(0)).reduce( (a, c) => a + c) % this.numBuckets;
}

HashTable.prototype.set = function(key, value){
  const hashKey = this.hash(key);
  if (!this.table[hashKey])
    this.table[hashKey] = [{[key]: value}];
  else{
    if (this.hasKey(key))
      this.table[hashKey][this.table[hashKey].findIndex( e => e[key])]= {[key]: value};
    else
      this.table[hashKey].push({[key]: value});
  }
    
}

HashTable.prototype.get = function(key){
  return this.table[this.hash(key)].find( e => e[key])[key];
}

HashTable.prototype.hasKey = function(key){
  return this.table[this.hash(key)].some( e => e[key]);
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
