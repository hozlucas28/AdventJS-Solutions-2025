import fn from './solution'

describe('Challenge 16: calculates the minimum number of sleighs needed to deliver all the gifts', () => {
	it('Test 01', () => {
		const result = fn([2, 3, 4, 1], 5)
		const expected = 2
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn([3, 3, 2, 1], 3)
		const expected = 3
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn([1, 1, 1, 1], 2)
		const expected = 2
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn([5, 6, 1], 5)
		const expected = null
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result = fn([], 10)
		const expected = 0
		expect(result).toBe(expected)
	})
})
