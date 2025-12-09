type Board = string
type Move = 'L' | 'R' | 'U' | 'D'
type Result = 'fail' | 'crash' | 'success'

type MoveActions = Record<Move | 'undefined', () => [number, number]>

export default function fn(board: Board, moves: string): Result {
	const _board = board
		.trim()
		.split('\n')
		.map((row) => row.split(''))

	let robotY = _board.findIndex((row) => row.includes('@'))
	let robotX = _board[robotY].indexOf('@')

	const moveActions: MoveActions = {
		L: () => [robotX - 1, robotY],
		R: () => [robotX + 1, robotY],
		U: () => [robotX, robotY - 1],
		D: () => [robotX, robotY + 1],
		undefined: () => [-1, -1],
	}

	let result: Result = 'fail'

	for (let i = 0; i < moves.length && result === 'fail'; i++) {
		const move = moves[i]
		const nextRobotI = moveActions[move as Move]()

		if (
			nextRobotI[0] < 0 ||
			nextRobotI[0] >= _board[0].length ||
			nextRobotI[1] < 0 ||
			nextRobotI[1] >= _board.length ||
			_board[nextRobotI[1]][nextRobotI[0]] === '#'
		) {
			result = 'crash'
			continue
		}

		_board[robotY][robotX] = '.'

		robotX = nextRobotI[0]
		robotY = nextRobotI[1]

		if (_board[robotY][robotX] === '*') result = 'success'

		_board[robotY][robotX] = '@'
	}

	return result
}
