type Light = '.' | 'R' | 'G'

export default function fn(board: Light[][]): boolean {
	const rows = board.length
	const cols = (board[0] ?? []).length
	if (rows < 4 && cols < 4) return false

	// Horizontal
	for (const row of board) {
		const horizontalLine = row.join('')
		if (horizontalLine.match(/R{4}|G{4}/)) return true
	}

	// Vertical
	for (let col = 0; col < cols; col++) {
		let verticalLine = ''
		for (let row = 0; row < rows; row++) verticalLine += board[row][col]
		if (verticalLine.match(/R{4}|G{4}/)) return true
	}

	// Left diagonal and right diagonal
	for (let row = 0; row <= rows - 4; row++) {
		for (let col = 0; col <= cols - 4; col++) {
			let leftDiagonalLine = ''
			for (let i = 0; i < 4; i++) leftDiagonalLine += board[row + i][col + i]
			if (leftDiagonalLine.match(/R{4}|G{4}/)) return true

			let rightDiagonalLine = ''
			for (let i = 0; i < 4; i++) rightDiagonalLine += board[row + i][col + 3 - i]
			if (rightDiagonalLine.match(/R{4}|G{4}/)) return true
		}
	}

	return false
}
