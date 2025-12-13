# Challenge 11

The Grinch wants to steal the Christmas presents from the warehouse. To do this, he needs to know **which presents are not under surveillance**.

The warehouse is represented as an array of strings (`string[]`), **where each present (`*`) is protected if its position is next to a camera (`#`)**. Each empty space is represented with a **dot (`.`)**.

Your task is to **count how many presents are not under surveillance**, meaning they do not have any adjacent camera (up, down, left, or right).

Keep in mind: _only the 4 cardinal directions are considered "adjacent", not diagonals._

Presents in the corners or at the edges can be unguarded, as long as they do not have cameras directly next to them.

```js
findUnsafeGifts(['.*.', '*#*', '.*.']) // ➞ 0
// All presents are next to a camera

findUnsafeGifts(['...', '.*.', '...']) // ➞ 1
// This present has no cameras around

findUnsafeGifts(['*.*', '...', '*#*']) // ➞ 2
// The presents in the top corners have no cameras around

findUnsafeGifts(['.....', '.*.*.', '..#..', '.*.*.', '.....']) // ➞ 4
// The four presents have no cameras, because they are diagonal to the camera
```

### Solutions

- [Python](./solution.py)
- [JavaScript](./solution.js)
- [TypeScript](./solution.ts)

## Stars earned

![8 stars](../../.github/11-challenge-stars.png)
