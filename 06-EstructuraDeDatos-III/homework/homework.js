"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function(){
  if (!this.right && !this.left)
    return 1;
  else
    return 1 + (this.right ? this.right.size() : 0) + (this.left ? this.left.size() : 0);
}

BinarySearchTree.prototype.insert = function(value){
  if (value > this.value)
    this.right ? this.right.insert(value) : this.right = new BinarySearchTree(value);
  else
    this.left ? this.left.insert(value) : this.left = new BinarySearchTree(value);

}

BinarySearchTree.prototype.contains = function(value){
  if (value > this.value)
    return this.right ? this.right.contains(value) : false;
  else if (value < this.value)
    return this.left ? this.left.contains(value) : false;
  else
    return true;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
  if (order === 'pre-order'){
    cb(this.value)
    if (this.left)
      this.left.depthFirstForEach(cb, order);
    if (this.right)
      this.right.depthFirstForEach(cb, order);
  }
  else if (order === 'post-order'){
    if (this.left)
      this.left.depthFirstForEach(cb, order);
    if (this.right)
      this.right.depthFirstForEach(cb, order);
    cb(this.value)
  }
  else{
    if (this.left)
      this.left.depthFirstForEach(cb, order);
    cb(this.value)
    if (this.right)
      this.right.depthFirstForEach(cb, order);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){
  cb(this.value);

  if (this.left)
    queue.push(this.left) 
  if (this.right)
    queue.push(this.right);

  if (queue.length)
    queue.shift().breadthFirstForEach(cb, queue);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
