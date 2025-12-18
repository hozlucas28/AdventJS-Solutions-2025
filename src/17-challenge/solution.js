/**
 * @typedef {'.' | 'R' | 'G'} Light
 */

/**
 * @param {Light[][]} board
 * @returns {boolean}
 */
export default function fn(board) {
	for (const horizontalLine of board) {
		const hasFourHorizontalLights = horizontalLine.join('').match(/R{4}|G{4}/)
		if (hasFourHorizontalLights) return true
	}

	for (let i = 0; i < (board[0] ?? []).length; i++) {
		let verticalLine = board[0][i]
		for (let j = 1; j < board.length; j++) verticalLine += board[j][i]

		const hasFourVerticalLights = verticalLine.match(/R{4}|G{4}/)
		if (hasFourVerticalLights) return true
	}

	return false
}
