/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
export default function fn(workshop, gift) {
	for (const key in workshop) {
		const value = workshop[key]

		if (typeof value !== 'object') {
			if (value === gift) return [key]
		} else {
			const innerKeyPath = [key, ...fn(value, gift)]
			if (innerKeyPath.length !== 1) return innerKeyPath
		}
	}

	return []
}
