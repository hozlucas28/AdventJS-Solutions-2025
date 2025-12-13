type Cell = '>' | '<' | '^' | 'v' | '.'

type Factory = string[]
type Result = 'completed' | 'broken' | 'loop'

export default function fn(factory: Factory): Result {
	const gift: [number, number] = [0, 0]
	const giftPath = new Set<`[${number}, ${number}]`>()

	const movements: Record<Exclude<Cell, '.'>, () => number> = {
		'>': () => gift[1]++,
		'<': () => gift[1]--,
		'^': () => gift[0]--,
		'v': () => gift[0]++,
	}

	const rows = factory.length
	const cols = (factory[0] ?? '').length

	while (gift[0] > -1 && gift[0] < rows && gift[1] > -1 && gift[1] < cols) {
		const movement = factory[gift[0]][gift[1]] as Cell
		if (movement === '.') return 'completed'

		giftPath.add(`[${gift[0]}, ${gift[1]}]`)

		movements[movement]()
		if (giftPath.has(`[${gift[0]}, ${gift[1]}]`)) return 'loop'
	}

	return 'broken'
}
