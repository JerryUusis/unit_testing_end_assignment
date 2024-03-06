# Test cases for getAllcarsByModel(searchValue)

## **getAllcarsByModel(searchValue)**

searches cars with given model

> Parameters:
>
> > searchValue is the model of the car to be searched

> Returns:
>
> > Returns an array of car objects of given model. If no car of given model is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## Tests

### Test 1: parameter is missing

Expect

```js
getAllCarsByModel();
```

to throw an error 'missing parameter'

### Test 2: no car found with searchValue

Expect

```js
getAllCarsByModel("Formula");
```

to return `[]` with following testdata;

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

### Test 3: searchValue returns array of matching car model objects

Expect

```js
getAllCarsByModel("GT");
```

to return

```json
[
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
]
```
with testdata: 

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
  },
  {
    "number": 3,
    "model": "XXL",
    "price": 15,
    "km": 12000,
    "options": ["repair set", "hook", "radar"],
    "extras": {
      "powerSource": "hybrid",
      "comments": "no comments",
      "consumptionPer100km": 5
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
]
```
