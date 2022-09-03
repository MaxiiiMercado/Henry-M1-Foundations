const { checkSeatStatus, getRowNumber, book } = require('../homework');

describe('CheckSeatStatus', () => {
    it('checkSeatStatus is a function', () => {
        expect(typeof checkSeatStatus).toBe('function');
    });

    it('should throw a TypeError if First parameter is not a string', () => {
        expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
    });

    it('should throw a TypeError if Second parameter is not a number', () => {
        expect(() => checkSeatStatus('Maxi', 'Mercado')).toThrow(new TypeError('Second parameter is not a number'));
    });

    it('should return true if the given seat defined by row and column is booked', () => {
        expect(checkSeatStatus('A', 1)).toBe(false);
    })

    it('should return false if the given seat defined by row and column is not booked', () => {
        expect(checkSeatStatus('E', 3)).toBe(true);
    })


});

describe('getRowNumber', () => {
    it('should return 0 if the letter given is an A', () => {
        expect(getRowNumber('A')).toBe(0);
    })

    it('should return 2 if the letter given is an C', () => {
        expect(getRowNumber('C')).toBe(2);
    })
});

describe('book', () => {
    it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
        expect(checkSeatStatus('C', 0)).toBe(true);
        expect(book('C', 0)).toBe('Seat in C0 successfully booked');
        expect(checkSeatStatus('C', 0)).toBe(false);
    });

    it('should return "Seat in XX is already booked" if the given seat is already booked', () => {
        expect(book('D', 2)).toBe('Seat in D2 is already booked');
    });
});