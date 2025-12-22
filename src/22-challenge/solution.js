/**
 * @typedef {[number, number]} CellPosition
 */

/**
 * @typedef {'S'} SantaCell
 * @typedef {'E'} ExitCell
 * @typedef {'.'} FreeCell
 * @typedef {'#'} WallCell
 * @typedef {SantaCell | ExitCell | FreeCell | WallCell} MazeCell
 */

/**
 * @param {MazeCell[][]} maze
 * @returns {boolean}
 */
export default function fn(maze) {
	/** @type {SantaCell} */
	const SANTA_CELL = 'S'

	/** @type {ExitCell} */
	const EXIT_CELL = 'E'

	/** @type {WallCell} */
	const WALL_CELL = '#'

	let canReachExit = false

	/** @type {CellPosition} */
	const santaPos = [-1, -1]
	for (let i = 0; i < maze.length && santaPos[0] === -1; i++) {
		const j = maze[i].indexOf(SANTA_CELL)
		;[santaPos[0], santaPos[1]] = [i, j]
	}

	/** @type {CellPosition[]} */
	const queue = [[...santaPos]]

	/** @type {Set<`${string}-${string}`>} */
	const visitedPositions = new Set([`${santaPos[0]}-${santaPos[1]}`])

	while (queue.length && !canReachExit) {
		const /** @type {CellPosition} */ current = queue.shift()

		/** @type {CellPosition[]} */
		const neighborPositions = []

		if (current[1] - 1 > -1) neighborPositions.push([current[0], current[1] - 1]) // Left.
		if (current[1] + 1 < maze[0].length) neighborPositions.push([current[0], current[1] + 1]) // Right.
		if (current[0] - 1 > -1) neighborPositions.push([current[0] - 1, current[1]]) // Up.
		if (current[0] + 1 < maze.length) neighborPositions.push([current[0] + 1, current[1]]) // Down.

		for (const [row, col] of neighborPositions) {
			const cellChar = maze[row][col]

			if (cellChar !== WALL_CELL && !visitedPositions.has(`${row}-${col}`)) {
				queue.push([row, col])
				visitedPositions.add(`${row}-${col}`)

				if (cellChar === EXIT_CELL) {
					canReachExit = true
					break
				}
			}
		}
	}

	return canReachExit
}
