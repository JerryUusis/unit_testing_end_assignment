'use stict';
const CarStorage = require('../carStorage');

describe('Test cases for the constructor', () => {
    test('Test 1: missing parameter throws an exception', () => {
        expect(() => new CarStorage()).toThrow('data storage missing')
    })
})

