import fn from './solution'

describe('Challenge 03: wrap boxes using only text', () => {
	it('Test 01', () => {
		const result = fn(4, '*')
		const expected = '****\n*  *\n*  *\n****'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn(3, '#')
		const expected = '###\n# #\n###'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn(2, '-')
		const expected = '--\n--'
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn(1, '+')
		const expected = ''
		expect(result).toBe(expected)
	})
})
