type CharCounter = {
	char: string
	amount: number
}

export default function fn(toy: string): string {
	const charCounters: CharCounter[] = []

	for (const char of toy) {
		const index = charCounters.findIndex((counter) => counter.char.toLowerCase() === char.toLowerCase())
		index === -1 ? charCounters.push({ char, amount: 1 }) : charCounters[index].amount++
	}

	const firstNonRepeatedChar = charCounters.find((counter) => counter.amount < 2)

	return firstNonRepeatedChar ? firstNonRepeatedChar.char : ''
}
