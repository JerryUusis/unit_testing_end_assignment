# Test cases for getACarMatchingNumber(searchKey)

## getACarMatchingNumber(searchKey)

Method searches the datastorage for an object with given searchKey. Key is unique.

> Parameters:
>
> > searchKey is the primary key number of the car

> Returns:
>
> > returns the car object matching the number or null if there is no match

> Throws:
>
> > if parameter searchKey is missing, throws an exception `'missing parameter'`

## Tests

### Test 1: parameter is missing

Expect

```js
getACarMatchingNumber();
```

to throw an error 'missing parameter'

### Test 2: no car found with searchKey

Expect

```js
getACarMatchingNumber(100);
```

to return `null` with following testdata:

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

### Test 3: matching number returns object with the search key

Expect

```js
getACarMatchingNumber(1);
```

to return

```json
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
```

with following testdata: 

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
