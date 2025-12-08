import fn from './solution'

describe('Challenge 08: find the first letter that is not repeated', () => {
	it('Test 01', () => {
		const result = fn('Gift')
		const expected = 'G'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn('sS')
		const expected = ''
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn('reindeeR')
		const expected = 'i'
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn('AaBbCc')
		const expected = ''
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result = fn('abcDEF')
		const expected = 'a'
		expect(result).toBe(expected)
	})

	it('Test 06', () => {
		const result = fn('aAaAaAF')
		const expected = 'F'
		expect(result).toBe(expected)
	})

	it('Test 07', () => {
		const result = fn('sTreSS')
		const expected = 'T'
		expect(result).toBe(expected)
	})

	it('Test 08', () => {
		const result = fn('z')
		const expected = 'z'
		expect(result).toBe(expected)
	})
})
