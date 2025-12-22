type CellPosition = [number, number]

type SantaCell = 'S'
type ExitCell = 'E'
type FreeCell = '.'
type WallCell = '#'
type MazeCell = SantaCell | ExitCell | FreeCell | WallCell

export default function fn(maze: MazeCell[][]): boolean {
	const SANTA_CELL: SantaCell = 'S'
	const EXIT_CELL: ExitCell = 'E'
	const WALL_CELL: WallCell = '#'

	let canReachExit = false

	const santaPos: CellPosition = [-1, -1]
	for (let i = 0; i < maze.length && santaPos[0] === -1; i++) {
		const j = maze[i].indexOf(SANTA_CELL)
		;[santaPos[0], santaPos[1]] = [i, j]
	}

	const queue: CellPosition[] = [[...santaPos]]
	const visitedPositions = new Set<`${string}-${string}`>([`${santaPos[0]}-${santaPos[1]}`])

	while (queue.length && !canReachExit) {
		const current = queue.shift()!
		const neighborPositions: CellPosition[] = []

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
