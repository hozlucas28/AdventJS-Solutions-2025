/**
 * @typedef {'*' | '#' | '.'} Cell
 */

/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
export default function fn(warehouse) {
	let unattendedGifts = 0

	for (let row = 0; row < warehouse.length; row++) {
		const upRow = warehouse[row - 1] ?? '.'.repeat(warehouse[row].length)
		const downRow = warehouse[row + 1] ?? '.'.repeat(warehouse[row].length)

		for (let col = 0; col < warehouse[row].length; col++) {
			const /** @type {Cell} */ cell = warehouse[row][col]
			if (cell !== '*') continue

			const upCell = upRow[col]
			const downCell = downRow[col]

			const leftCell = warehouse[row][col - 1] ?? '.'
			const rightCell = warehouse[row][col + 1] ?? '.'

			const cardinalCells = [upCell, downCell, leftCell, rightCell]

			unattendedGifts += +!cardinalCells.includes('#')
		}
	}

	return unattendedGifts
}
