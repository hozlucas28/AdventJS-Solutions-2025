# Challenge 02

Santa's factory has started receiving the toy **production list**.
Each line indicates **which toy** must be manufactured and **how many units**.

The elves, as always, have messed things up: they’ve written down some toys with quantities that don’t make any sense.

You have a list of objects with this structure:

- `toy`: the name of the toy (string)
- `quantity`: how many units must be manufactured (number)

Your task is to write a function that takes this list and returns **an array of strings** with:

Each toy repeated as many times as indicated by `quantity`.
In the same order in which they appear in the original list
Ignoring toys with invalid quantities (less than or equal to 0, or not a number)

```js
const production1 = [
	{ toy: 'car', quantity: 3 },
	{ toy: 'doll', quantity: 1 },
	{ toy: 'ball', quantity: 2 },
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
	{ toy: 'train', quantity: 0 }, // not manufactured
	{ toy: 'bear', quantity: -2 }, // neither
	{ toy: 'puzzle', quantity: 1 },
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []
```

### Solutions

- [Python](./solution.py)
- [JavaScript](./solution.js)
- [TypeScript](./solution.ts)

## Stars earned

![8 stars](../../.github/02-challenge-stars.png)
