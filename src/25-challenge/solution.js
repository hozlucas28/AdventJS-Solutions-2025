/**
 * @typedef {'>' | '+' | '-' | '[' | ']' | '{' | '}'} Instruction
 */

/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
export default function fn(code) {
	let result = 0
	let position = 0

	/** @type {Record<Instruction, () => void>} */
	const instructionActions = {
		'>': () => position++,
		'+': () => {
			result++
			position++
		},
		'-': () => {
			result--
			position++
		},
		'[': () => {
			if (!result) position = code.indexOf(']', position)
			position++
		},
		']': () => (position = code.lastIndexOf('[', position)),
		'{': () => {
			if (!result) position = code.indexOf('}', position)
			position++
		},
		'}': () => position++,
	}

	while (position < code.length) {
		const /** @type {Instruction} */ instruction = code[position]
		instructionActions[instruction]()
	}

	return result
}
