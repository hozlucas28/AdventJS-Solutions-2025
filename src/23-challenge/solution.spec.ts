import fn from './solution'

describe('Challenge 23: calculate the total number of steps required to reach all the houses with presents from the starting position', () => {
	it('Test 01', () => {
		const result = fn([
			['S', '.', 'G'],
			['.', '#', '.'],
			['G', '.', '.'],
		])

		const expected = 4
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn([
			['S', '#', 'G'],
			['#', '#', '.'],
			['G', '.', '.'],
		])

		const expected = -1
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn([['S', 'G']])
		const expected = 1
		expect(result).toBe(expected)
	})
})
