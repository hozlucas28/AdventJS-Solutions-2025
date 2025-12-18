import fn from './solution'

describe('Challenge 18: check if there is a line of 4 lights of the same color that are on and aligned horizontally, vertically or diagonally on the panel', () => {
	it('Test 01', () => {
		const result = fn([
			['R', '.', '.', '.'],
			['.', 'R', '.', '.'],
			['.', '.', 'R', '.'],
			['.', '.', '.', 'R'],
		])

		const expected = true

		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn([
			['.', '.', '.', 'G'],
			['.', '.', 'G', '.'],
			['.', 'G', '.', '.'],
			['G', '.', '.', '.'],
		])

		const expected = true

		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn([
			['R', 'R', 'R', 'R'],
			['G', 'G', '.', '.'],
			['.', '.', '.', '.'],
			['.', '.', '.', '.'],
		])

		const expected = true

		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn([
			['R', 'G', 'R'],
			['G', 'R', 'G'],
			['G', 'R', 'G'],
		])

		const expected = false

		expect(result).toBe(expected)
	})
})
