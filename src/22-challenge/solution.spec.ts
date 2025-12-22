import fn from './solution'

describe('Challenge 22: determines if it is possible to reach the maze exit', () => {
	it('Test 01', () => {
		const result = fn([
			['S', '.', '#', '.'],
			['#', '.', '#', '.'],
			['.', '.', '.', '.'],
			['#', '#', '#', 'E'],
		])

		const expected = true

		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn([
			['S', '#', '#'],
			['.', '#', '.'],
			['.', '#', 'E'],
		])

		const expected = false

		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn([['S', 'E']])

		const expected = true

		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn([
			['S', '.', '.', '.', '.'],
			['#', '#', '#', '#', '.'],
			['.', '.', '.', '.', '.'],
			['.', '#', '#', '#', '#'],
			['.', '.', '.', '.', 'E'],
		])

		const expected = true

		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result = fn([
			['S', '.', '.'],
			['.', '.', '.'],
			['#', '#', '#'],
			['.', '.', 'E'],
		])

		const expected = false

		expect(result).toBe(expected)
	})
})
