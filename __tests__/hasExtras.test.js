'use strict';

const dataStorage = require('../datastorage.json');
const CarStorage = require('../carStorage');

describe('Test cases for hasExtras(searchKey)', () => {
    const carStorage = new CarStorage(dataStorage);
    test('Test 1: parameter is missing', () => {
        expect(carStorage.hasExtras()).toEqual(false);
    });
    test('Test 2: no car found with searchKey', () => {
        expect(carStorage.hasExtras(100)).toEqual(false);
    });
    test('Test 3: matching searchKey of a car has extras', () => {
        expect(carStorage.hasExtras(1)).toEqual(true);
    });
    test('Test 4: matching searchKey of a data does not have extras', ()=> {
        const testData = [
            {
              "number": 1,
              "model": "XL",
              "price": 123,
              "km": 0,
              "options": ["warranty", "hook", "speedometer"],
            },
        ];
        const testCarStorage = new CarStorage(testData);
        expect(testCarStorage.hasExtras(1)).toEqual(false);
    });
    test('Test 5: matching searchKey of a data extras is empty', ()=> {
        const testData = [
            {
              "number": 1,
              "model": "XL",
              "price": 123,
              "km": 0,
              "options": ["warranty", "hook", "speedometer"],
              "extras": {}
            },
        ];
        const testCarStorage = new CarStorage(testData);
        expect(testCarStorage.hasExtras(1)).toEqual(false);
    })
})