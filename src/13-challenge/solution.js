/**
 * @typedef {'>' | '<' | '^' | 'v' | '.'} Cell
 */

/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
export default function fn(factory) {
	/** @type {[number, number]} */
	const gift = [0, 0]

	/** @type {const giftPath: } */
	const giftPath = new Set()

	/** @type {Record<Exclude<Cell, '.'>, () => number>} */
	const movements = {
		'>': () => gift[1]++,
		'<': () => gift[1]--,
		'^': () => gift[0]--,
		'v': () => gift[0]++,
	}

	const rows = factory.length
	const cols = (factory[0] ?? '').length

	while (gift[0] > -1 && gift[0] < rows && gift[1] > -1 && gift[1] < cols) {
		const /** @type {Cell} */ movement = factory[gift[0]][gift[1]]
		if (movement === '.') return 'completed'

		giftPath.add(`[${gift[0]}, ${gift[1]}]`)

		movements[movement]()
		if (giftPath.has(`[${gift[0]}, ${gift[1]}]`)) return 'loop'
	}

	return 'broken'
}
