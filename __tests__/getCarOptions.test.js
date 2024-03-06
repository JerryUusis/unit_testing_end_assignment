'useStrict';

const CarStorage = require('../carStorage');
const dataStorage = require('../datastorage.json');

describe('Test cases for getCarOptions(searchKey)', () => {
  const carStorage = new CarStorage(dataStorage);
  test('Test 1: parameter is missing', () => {
    expect(carStorage.getCarOptions()).toEqual([]);
  });
  test('Test 2: no car found with searchKey', () => {
    expect(carStorage.getCarOptions(100)).toEqual([]);
  });
  test('Test 3: matching number returns array of options', () => {
    expect(carStorage.getCarOptions(1)).toEqual(["warranty","hook","speedometer"])
  });
  test("Test 4: matching number doesn't have any value in options", () => {
    const testData = [{
      "number": 1,
      "model": "XL",
      "price": 123,
      "km": 0,
      "options": [],
      "extras": {
        "powerSource": "gas",
        "comments": "no comments",
        "consumptionPer100km": 4
      }
    }];
    const testCarStorage = new CarStorage(testData);
    expect(testCarStorage.getCarOptions(1)).toEqual([]);
  })
  test('Test 5: Mathcing number is missing options', () => {
    const testData = [{
      "number": 1,
      "model": "XL",
      "price": 123,
      "km": 0,
      "extras": {
        "powerSource": "gas",
        "comments": "no comments",
        "consumptionPer100km": 4
      }
    }];
    const testCarStorage = new CarStorage(testData);
    expect(testCarStorage.getCarOptions(1)).toEqual([]);
  })
})