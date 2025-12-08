/**
 * @typedef {Object} CharCounter
 * @property {string} char
 * @property {number} amount
 */

/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
export default function fn(toy) {
	/** @type {CharCounter[]} */
	const charCounters = []

	for (const char of toy) {
		const index = charCounters.findIndex((counter) => counter.char.toLowerCase() === char.toLowerCase())
		index === -1 ? charCounters.push({ char, amount: 1 }) : charCounters[index].amount++
	}

	const firstNonRepeatedChar = charCounters.find((counter) => counter.amount < 2)

	return firstNonRepeatedChar ? firstNonRepeatedChar.char : ''
}
