import fn from './solution'

describe('Challenge 13: simulate the path of a gift inside a factory and return how it ends', () => {
	it('Test 01', () => {
		const result = fn(['>>.'])
		const expected = 'completed'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn(['>>>'])
		const expected = 'broken'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn(['>><'])
		const expected = 'loop'
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn(['>>v', '..<'])
		const expected = 'completed'
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result = fn(['>>v', '<<<'])
		const expected = 'broken'
		expect(result).toBe(expected)
	})

	it('Test 06', () => {
		const result = fn(['>v.', '^..'])
		const expected = 'completed'
		expect(result).toBe(expected)
	})

	it('Test 07', () => {
		const result = fn(['v.', '^.'])
		const expected = 'loop'
		expect(result).toBe(expected)
	})
})
