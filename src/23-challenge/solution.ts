type CellPosition = [number, number]

type SantaCell = 'S'
type HouseCell = 'G'
type FreeCell = '.'
type ObstacleCell = '#'

type MapCell = SantaCell | HouseCell | FreeCell | ObstacleCell

export default function fn(map: MapCell[][]): number {
	const SANTA_CELL: SantaCell = 'S'
	const HOUSE_CELL: HouseCell = 'G'
	const OBSTACLE_CELL: ObstacleCell = '#'

	const santaPos: CellPosition = [-1, -1]
	for (let i = 0; i < map.length && santaPos[1] === -1; i++) {
		const j = map[i].indexOf(SANTA_CELL)
		;[santaPos[0], santaPos[1]] = [i, j]
	}

	let minStepsToHouses = 0

	const queue: [CellPosition, number][] = [[[...santaPos], 0]]
	const visitedHouses = new Set<`${string}-${string}`>()
	const visitedPositions = new Set<`${string}-${string}`>([`${santaPos[0]}-${santaPos[1]}`])

	while (queue.length) {
		const [current, steps] = queue.shift()!
		const neighborPositions: CellPosition[] = []

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
