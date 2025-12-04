import fn from './solution'

describe("Challenge 04: decode the code of door Santa's workshop", () => {
	it('Test 01', () => {
		const result = fn('[1++][2-][3+][<]')
		const expected = '3144'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn('[9+][0-][4][<]')
		const expected = '0944'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn('[1+][2-]')
		const expected = null
		expect(result).toBe(expected)
	})
})
