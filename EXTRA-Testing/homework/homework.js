const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

const getRowNumber = function(letter){
    return letter.charCodeAt(0) - 65;
}

const checkSeatStatus = function(a, b){
    if (typeof a !== 'string')
        throw new TypeError('First parameter is not a string');
    if (typeof b !== 'number')
        throw new TypeError('Second parameter is not a number');

    return !layout[getRowNumber(a)][b].booked;
}

const book = function(a,b){
    if (checkSeatStatus(a,b)){   
        layout[getRowNumber(a)][b].booked = true;
        return `Seat in ${a + b} successfully booked`
    }
    else
        return `Seat in ${a + b} is already booked`;
}

module.exports = {checkSeatStatus, getRowNumber, book};