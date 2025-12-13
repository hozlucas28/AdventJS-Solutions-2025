import fn from './solution'

describe('Challenge 12: get the winner of the elf battle', () => {
	it('Test 01', () => {
		const result = fn('A', 'B')
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn('F', 'B')
		const expected = 1
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn('AAB', 'BBA')
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn('AFA', 'BBA')
		const expected = 1
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result = fn('AFAB', 'BBAF')
		const expected = 1
		expect(result).toBe(expected)
	})

	it('Test 06', () => {
		const result = fn('AA', 'FF')
		const expected = 2
		expect(result).toBe(expected)
	})
})
