# Test cases for getCarOptions(searchKey)

## **getCarOptions(searchKey)**

Returns an array of car options. If none found, returns an empty array.

> Parameters:
>
> > searchKey is the number of the car

> Returns:
>
> > options of the car as an array or if none is found or it is empty or parameter searchKey is missing, returns an empty array.

## Tests

### Test 1: parameter is missing

Expect

```js
getCarOptions();
```

to return an empty array `[]`

### Test 2: no car found with searchKey

Expect

```js
getCarOptions(100);
```

to return `[]` with following testdata

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

### Test 3: matching number returns array of options

Expect

```js
getCarOptions(1);
```

with

```json
{
      "number": 1,
      "model": "XL",
      "price": 123,
      "km": 0,
      "options": [
        "warranty",
        "hook",
        "speedometer"
      ],
      "extras": {
        "powerSource": "gas",
        "comments": "no comments",
        "consumptionPer100km": 4
      }
    },
```

to return

```js
["warranty", "hook", "speedometer"];
```

### Test 4: matching number doesn't have any value in options

Expect

```js
getCarOptions(1);
```

with

```json
{
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
    },
```

to return an empty array `[]`

### Test 5: Mathcing number is missing options

Expect

```js
getCarOptions(1);
```

with

```json
{
      "number": 1,
      "model": "XL",
      "price": 123,
      "km": 0,
      "extras": {
        "powerSource": "gas",
        "comments": "no comments",
        "consumptionPer100km": 4
      }
    },
```

to return `[]`
