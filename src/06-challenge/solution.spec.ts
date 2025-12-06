import fn from './solution'
import type { Glove } from './solution'

describe('Challenge 06: get the number of glove pairs', () => {
	it('Test 01', () => {
		const gloves: Glove[] = [
			{ hand: 'L', color: 'red' },
			{ hand: 'R', color: 'red' },
			{ hand: 'R', color: 'green' },
			{ hand: 'L', color: 'blue' },
			{ hand: 'L', color: 'green' },
		]

		const result = fn(gloves)
		const expected = ['red', 'green']
		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const gloves: Glove[] = [
			{ hand: 'L', color: 'gold' },
			{ hand: 'R', color: 'gold' },
			{ hand: 'L', color: 'gold' },
			{ hand: 'L', color: 'gold' },
			{ hand: 'R', color: 'gold' },
		]

		const result = fn(gloves)
		const expected = ['gold', 'gold']
		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const gloves: Glove[] = [
			{ hand: 'L', color: 'red' },
			{ hand: 'R', color: 'green' },
			{ hand: 'L', color: 'blue' },
		]

		const result = fn(gloves)
		const expected: unknown[] = []
		expect(result).toStrictEqual(expected)
	})
})
