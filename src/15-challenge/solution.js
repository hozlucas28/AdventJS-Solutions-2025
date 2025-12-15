/**
 * @param {Array<Object>} data - The data to draw the table
 * @param {string} sortBy - The field to sort the table
 * @returns {string}
 */
export default function fn(data, sortBy) {
	data.sort(
		typeof data[0][sortBy] === 'number' ? (a, b) => a[sortBy] - b[sortBy] : (a, b) => a[sortBy].localeCompare(b[sortBy])
	)

	/** @type {(number | string)[][]} */
	const table = []

	/** @type {number[]} */
	const headerLengths = Array.from({ length: Object.keys(data[0]).length }, () => 0)

	for (const element of data) {
		let headerIndex = 0

		/** @type {(number | string)[]} */
		const row = []

		for (const key in element) {
			const value = element[key]

			headerLengths[headerIndex] = Math.max(value.toString().length, headerLengths[headerIndex])

			row.push(value)
			headerIndex = row.length
		}

		table.push(row)
	}

	let sep = '+'
	for (const colLength of headerLengths) {
		sep += '+'.padStart(colLength + 3, '-')
	}

	let header = '|'
	for (let i = 0; i < table[0].length; i++) {
		header += ` ${String.fromCharCode(i + 65)}`.padEnd(headerLengths[i] + 1, ' ') + ' |'
	}

	let content = ''
	for (const rowData of table) {
		for (let i = 0; i < rowData.length; i++) {
			content += `| ${rowData[i]}`.padEnd(headerLengths[i] + 3, ' ')
		}

		content += '|\n'
	}

	const textTable = `${sep}\n${header}\n${sep}\n${content}${sep}`

	return textTable
}
