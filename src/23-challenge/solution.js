/**
 * @typedef {[number, number]} CellPosition
 */

/**
 * @typedef {'S'} SantaCell
 * @typedef {'G'} HouseCell
 * @typedef {'.'} FreeCell
 * @typedef {'#'} ObstacleCell
 *
 * @typedef {SantaCell | HouseCell | FreeCell | ObstacleCell} MapCell
 */

/**
 * @param {MapCell[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
export default function fn(map) {
	/** @type {SantaCell} */
	const SANTA_CELL = 'S'

	/** @type {HouseCell} */
	const HOUSE_CELL = 'G'

	/** @type {ObstacleCell} */
	const OBSTACLE_CELL = '#'

	/** @type {CellPosition} */
	const santaPos = [-1, -1]
	for (let i = 0; i < map.length && santaPos[1] === -1; i++) {
		const j = map[i].indexOf(SANTA_CELL)
		;[santaPos[0], santaPos[1]] = [i, j]
	}

	let minStepsToHouses = 0

	/** @type {[CellPosition, number][]} */
	const queue = [[[...santaPos], 0]]

	/** @type {Set<`${string}-${string}`>} */
	const visitedHouses = new Set()

	/** @type {Set<`${string}-${string}`>} */
	const visitedPositions = new Set([`${santaPos[0]}-${santaPos[1]}`])

	while (queue.length) {
		/** @type {[CellPosition, number]} */
		const [current, steps] = queue.shift()

		/** @type {CellPosition[]} */
		const neighborPositions = []

		if (current[1] - 1 > -1) neighborPositions.push([current[0], current[1] - 1]) // Left.
		if (current[1] + 1 < map[0].length) neighborPositions.push([current[0], current[1] + 1]) // Right.
		if (current[0] - 1 > -1) neighborPositions.push([current[0] - 1, current[1]]) // Up.
		if (current[0] + 1 < map.length) neighborPositions.push([current[0] + 1, current[1]]) // Down.

		for (const [row, col] of neighborPositions) {
			const cellChar = map[row][col]

			if (cellChar !== OBSTACLE_CELL && !visitedPositions.has(`${row}-${col}`)) {
				queue.push([[row, col], steps + 1])
				visitedPositions.add(`${row}-${col}`)

				if (cellChar === HOUSE_CELL) {
					minStepsToHouses += steps + 1
					visitedHouses.add(`${row}-${col}`)
				}
			}
		}
	}

	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			if (map[i][j] === HOUSE_CELL && !visitedHouses.has(`${i}-${j}`)) return -1
		}
	}

	return minStepsToHouses
}
