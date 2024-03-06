const dataStorage = require('../datastorage.json');
const CarStorage = require('../carStorage');

describe('Test cases for getExtras(searchKey)', () => {
    const carStorage = new CarStorage(dataStorage);

    test('Test 1: parameter is missing', () => {
        expect(carStorage.getExtras()).toEqual(null);
    })
    test('Test 2: no car found with searchKey', () => {
        expect(carStorage.getExtras(100)).toEqual(null);
    })
    test('Test 3: matching number returns object of extras', () => {
        expect(carStorage.getExtras(1)).toEqual({
            "powerSource": "gas",
            "comments": "no comments",
            "consumptionPer100km": 4
        })
    })
    test("Test 4: matching number doesn't have any value in extras", () => {
        const testData = {
            "number": 5,
            "model": "GT",
            "price": 300,
            "km": 0,
            "extras": {},
            "options": ["speedometer", "hook", "coffee warmer"]
        }
        const testCarStorage = new CarStorage(testData);
        expect(carStorage.getExtras(5)).toEqual(null);
    });
    test('Test 5: Mathcing number is missing extras', () => {
        const testData = [{
            "number": 5,
            "model": "GT",
            "price": 300,
            "km": 0,
            "options": ["speedometer", "hook", "coffee warmer"]
        }];
        const testCarStorage = new CarStorage(testData);
        expect(testCarStorage.getExtras(5)).toEqual(null);
    });
});