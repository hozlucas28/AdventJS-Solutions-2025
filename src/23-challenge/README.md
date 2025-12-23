# Challenge 23

Santa Claus 🎅 has to deliver presents in a town represented as a **grid map**.

Each cell on the map can be:

- `'S'` → Santa's starting point (where the presents are)
- `'G'` → House that must receive a present
- `'.'` → Free path
- `'#'` → Obstacle (cannot be crossed)

Santa makes independent deliveries for each present. He leaves from `'S'`, delivers the present to a house `'G'`, and **immediately returns to `'S'`** to pick up the next one. However, for this challenge, **we only want to calculate the sum of the minimum one-way distances** from `'S'` to each house `'G'`.

**🎯 Your goal**
Write the function `minStepsToDeliver(map)` that returns the **total number of steps** required to reach all the houses with presents from the starting position.

Keep in mind:

- You always start from the initial position `'S'`.
- For each present, you must calculate the **minimum distance** from `'S'` to that house `'G'`.
- Obstacles (`'#'`) cannot be crossed.
- If any house with a present is unreachable, the function must return `-1`.

```js
minStepsToDeliver([
	['S', '.', 'G'],
	['.', '#', '.'],
	['G', '.', '.'],
])
// Result: 4

/*
Explanation:
- Minimum distance from S (0,0) to G (0,2): 2 steps
- Minimum distance from S (0,0) to G (2,0): 2 steps
- Total: 2 + 2 = 4
*/

minStepsToDeliver([
	['S', '#', 'G'],
	['#', '#', '.'],
	['G', '.', '.'],
])
// Result: -1
// (The house at (0,2) is unreachable due to obstacles)

minStepsToDeliver([['S', 'G']])
// Result: 1
```

**🎯 Rules**

- The map always contains exactly one `'S'`.
- There can be zero or more houses with presents (`'G'`).
- The order of deliveries doesn't matter, as each is measured independently from `'S'`.
- You must return the **sum of the minimum one-way distances**.

**🧠 Hint**

- Calculate the shortest distance from `'S'` to each `'G'` (you can use a Breadth-First Search or BFS algorithm).
- If any present has no possible path, the total result is `-1`.

### Solutions

- [Python](./solution.py)
- [JavaScript](./solution.js)
- [TypeScript](./solution.ts)

## Stars earned

![8 stars](../../.github/23-challenge-stars.png)
