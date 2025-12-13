import fn from './solution'

describe('Challenge 11: count how many gifts are unattended', () => {
	it('Test 01', () => {
		const result = fn(['.*.', '*#*', '.*.'])
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn(['...', '.*.', '...'])
		const expected = 1
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn(['*.*', '...', '*#*'])
		const expected = 2
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn(['.....', '.*.*.', '..#..', '.*.*.', '.....'])
		const expected = 4
		expect(result).toBe(expected)
	})
})
