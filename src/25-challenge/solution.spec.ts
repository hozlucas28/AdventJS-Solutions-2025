import fn from './solution'

describe('Challenge 25: get the value of the program after executing all the instructions', () => {
	it('Test 01', () => {
		const result = fn('+++')
		const expected = 3
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn('+--')
		const expected = -1
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn('>+++[-]')
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn('>>>+{++}')
		const expected = 3
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result = fn('+{[-]+}+')
		const expected = 2
		expect(result).toBe(expected)
	})

	it('Test 06', () => {
		const result = fn('{+}{+}{+}')
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 07', () => {
		const result = fn('------[+]++')
		const expected = 2
		expect(result).toBe(expected)
	})

	it('Test 08', () => {
		const result = fn('-[++{-}]+{++++}')
		const expected = 5
		expect(result).toBe(expected)
	})
})
