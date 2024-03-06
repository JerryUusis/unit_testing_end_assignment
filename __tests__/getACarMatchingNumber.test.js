'use strict';

const dataStorage = require('../datastorage.json');
const CarStorage = require('../carStorage');

describe('Test cases for getACarMatchingNumber(searchKey)', () => {
    const carStorage = new CarStorage(dataStorage);
    test('Test 1: parameter is missing', () => {
        expect(() => carStorage.getACarMatchingNumber()).toThrow('missing parameter')
    });
    test('Test 2: no car found with searchKey', () => {
        expect(carStorage.getACarMatchingNumber(100)).toEqual(null)
    });
    test('Test 3: matching number returns object with the search key', () => {
        expect(carStorage.getACarMatchingNumber(1)).toEqual({
            "number": 1,
            "model": "XL",
            "price": 123,
            "km": 0,
            "options": ["warranty", "hook", "speedometer"],
            "extras": {
                "powerSource": "gas",
                "comments": "no comments",
                "consumptionPer100km": 4
            }
        })
    });
})