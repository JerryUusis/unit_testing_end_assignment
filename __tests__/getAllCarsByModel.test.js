'use strict';

const dataStorage = require('../datastorage.json');
const CarStorage = require('../carStorage');

describe('Test cases for getAllcarsByModel(searchValue)', () => {
    const carStorage = new CarStorage(dataStorage);
    test('Test 1: parameter is missing', () => {
        expect(() => carStorage.getAllCarsByModel()).toThrow('missing parameter')
    })
    test('Test 2: no car found with searchValue', () => {
        expect(carStorage.getAllCarsByModel('Formula')).toEqual([])
    })
    test('Test 3: searchValue returns array of matching car model objects', () => {
        expect(carStorage.getAllCarsByModel("GT")).toEqual([
                {
                  "number": 2,
                  "model": "GT",
                  "price": 200,
                  "km": 120000,
                  "options": ["speedometer", "hook", "clock"],
                  "extras": {
                    "powerSource": "pedalling",
                    "comments": "no comments",
                    "consumptionPer100km": 6
                  }
                },
                {
                  "number": 4,
                  "model": "GT",
                  "price": 123,
                  "km": 12000,
                  "options": ["radar", "hook", "coffee warmer"],
                  "extras": {
                    "powerSource": "hybrid",
                    "comments": "-",
                    "consumptionPer100km": 7
                  }
                },
                {
                  "number": 5,
                  "model": "GT",
                  "price": 300,
                  "km": 0,
                  "options": ["speedometer", "hook", "coffee warmer"]
                }
        ])
    })
})