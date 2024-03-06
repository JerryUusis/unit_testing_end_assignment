# Test cases for hasExtras(searchKey)

## **hasExtras(searchKey)**

Method checks based on number if the car has `extras` or not.

>Parameters:
>>searchKey is the number to be searched

>Returns:
>>Returns true if the car matching the searchKey has `extras` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

## Tests

### Test 1: parameter is missing

Expect

```js
hasExtras();
```

return 'false';

### Test 2: no car found with searchKey

Expect

```js
hasExtras(100);
```

to return `false` with following testdata:

```json
[
  {
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
  },
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
  }
]
```

### Test 3: matching searchKey of a car has extras

Expect 

```js
hasExtras(1);
```

```json
[
  {
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
  },
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
  }
]
```

to return `true`

### Test 4: matching searchKey of a data does not have extras

Expect 

```js
hasExtras(1)
```

to return `false` with following testdata:

```json
[
  {
    "number": 1,
    "model": "XL",
    "price": 123,
    "km": 0,
    "options": ["warranty", "hook", "speedometer"],
  },
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
  }
]
```

### Test 5: matching searchKey of a data extras is empty

Expect 

```js
hasExtras(1)
```

to return `false` with following testdata:

```json
[
  {
    "number": 1,
    "model": "XL",
    "price": 123,
    "km": 0,
    "options": ["warranty", "hook", "speedometer"],
  },
  {
    "number": 2,
    "model": "GT",
    "price": 200,
    "km": 120000,
    "options": ["speedometer", "hook", "clock"],
    "extras": {}
  }
]
```