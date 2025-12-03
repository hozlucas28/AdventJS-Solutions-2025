/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
export default function fn(size, symbol) {
	if (size < 2) return ''

	let wrapper = `${symbol.repeat(size)}\n`

	for (let i = 2; i < size; i++) {
		wrapper += `${symbol}${' '.repeat(size - 2)}${symbol}\n`
	}

	wrapper += `${symbol.repeat(size)}`

	return wrapper
}
