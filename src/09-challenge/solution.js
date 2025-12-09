/**
 * @typedef {string} Board
 * @typedef {'L' | 'R' | 'U' | 'D'} Move
 * @typedef {'fail' | 'crash' | 'success'} Result
 * @typedef {Record<Move | 'undefined', () => [number, number]>} MoveActions
 */

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {Result}
 */
export default function fn(board, moves) {
	const _board = board
		.trim()
		.split('\n')
		.map((row) => row.split(''))

	let robotY = _board.findIndex((row) => row.includes('@'))
	let robotX = _board[robotY].indexOf('@')

	/** @type {MoveActions} */
	const moveActions = {
		L: () => [robotX - 1, robotY],
		R: () => [robotX + 1, robotY],
		U: () => [robotX, robotY - 1],
		D: () => [robotX, robotY + 1],
		undefined: () => [-1, -1],
	}

	/** @type {Result} */
	let result = 'fail'

	for (let i = 0; i < moves.length && result === 'fail'; i++) {
		const move = moves[i]
		const nextRobotI = moveActions[move]()

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
