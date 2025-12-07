import fn from './solution'

describe('Challenge 07: draw a Christmas tree', () => {
	it('Test 01', () => {
		const result = fn(5, 'o', 2)
		const expected = '    *\n   o*o\n  *o*o*\n o*o*o*o\n*o*o*o*o*\n    #'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn(3, '@', 3)
		const expected = '  *\n *@*\n*@**@\n  #'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn(4, '+', 1)
		const expected = '   +\n  +++\n +++++\n+++++++\n   #'
		expect(result).toBe(expected)
	})
})
