import fn from './solution'

describe('Challenge 02: transform an array of gift-quantity map into an array of gift names and remove invalid ones', () => {
	it('Test 01', () => {
		const production = [
			{ toy: 'car', quantity: 3 },
			{ toy: 'doll', quantity: 1 },
			{ toy: 'ball', quantity: 2 },
		]

		const result = fn(production)
		const expected = ['car', 'car', 'car', 'doll', 'ball', 'ball']

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const production = [
			{ toy: 'train', quantity: 0 },
			{ toy: 'bear', quantity: -2 },
			{ toy: 'puzzle', quantity: 1 },
		]

		const result = fn(production)
		const expected = ['puzzle']

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const production: any[] = []

		const result = fn(production)
		const expected: any[] = []

		expect(result).toStrictEqual(expected)
	})
})
