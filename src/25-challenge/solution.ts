type Instruction = '>' | '+' | '-' | '[' | ']' | '{' | '}'

export default function fn(code: string): number {
	let result = 0
	let position = 0

	const instructionActions: Record<Instruction, () => void> = {
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
		const instruction = code[position] as Instruction
		instructionActions[instruction]()
	}

	return result
}
