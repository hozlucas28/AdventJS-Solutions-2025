/**
 * @param {string} brackets - The string to check
 * @returns {number} The maximum depth of the magic
 */
export default function fn(brackets) {
	/**@type {string[]} */
	const queue = []
	let deepLevel = -1

	for (const bracket of brackets) {
		if (bracket === '[') {
			queue.push(bracket)
		} else if (queue.length) {
			deepLevel = Math.max(queue.length, deepLevel)
			queue.shift()
		} else return -1
	}

	return queue.length ? -1 : deepLevel
}
