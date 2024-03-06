# Test cases for getExtras(searchKey)

## **getExtras(searchKey)**

searches the car matching the searchKey and if match is found returns the extras object otherwise null is returned

> Parameters:
>
> > searchKey is the number of the car

> Returns:
>
> > returns the extras object of the car matching the searchKey. If no car matching the given searchKey is found or searchKey is missing, null will be returned

## Tests

### Test 1: parameter is missing

Expect

```js
getExtras();
```

to return `null`

### Test 2: no car found with searchKey

Expect

```js
getExtras(100);
```

to return `null` with following testdata;

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

### Test 3: matching number returns object of extras

Expect

```js
getExtras(1);
```

to return

```js
    {
      "powerSource": "pedalling",
      "comments": "no comments",
      "consumptionPer100km": 6
    }
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
  }
]
```

### Test 4: matching number doesn't have any value in extras

Expect

```js
getExtras(5);
```

to return `null` with following testdata:

```json
{
  "number": 5,
  "model": "GT",
  "price": 300,
  "km": 0,
  "extras": {},
  "options": ["speedometer", "hook", "coffee warmer"]
}
```

### Test 5: Mathcing number is missing extras

Expect

```js
getExtras(5);
```

to return `null` with following testdata:

```json
{
  "number": 5,
  "model": "GT",
  "price": 300,
  "km": 0,
  "options": ["speedometer", "hook", "coffee warmer"]
}
```
