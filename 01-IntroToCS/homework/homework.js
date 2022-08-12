'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  return num.split('').reverse().reduce( (decimal, binario, index) => parseInt(decimal) + binario * (2 ** index));
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = '';

  while (num > 0){
    binario = (num % 2) + binario;
    num = parseInt(num / 2); 
  }

  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}