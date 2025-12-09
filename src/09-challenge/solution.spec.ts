import fn from './solution'

describe('Challenge 09: Calculate pick result of the robot vacuum reindeer', () => {
	it('Test 01', () => {
		const board = '\n.....\n.*#.*\n.@...\n.....\n'

		const result = fn(board, 'D')
		const expected = 'fail'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const board = '\n.....\n.*#.*\n.@...\n.....\n'

		const result = fn(board, 'U')
		const expected = 'success'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const board = '\n.....\n.*#.*\n.@...\n.....\n'

		const result = fn(board, 'RU')
		const expected = 'crash'
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const board = '\n.....\n.*#.*\n.@...\n.....\n'

		const result = fn(board, 'RRRUU')
		const expected = 'success'
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const board = '\n.....\n.*#.*\n.@...\n.....\n'

		const result = fn(board, 'DD')
		const expected = 'crash'
		expect(result).toBe(expected)
	})

	it('Test 06', () => {
		const board = '\n.....\n.*#.*\n.@...\n.....\n'

		const result = fn(board, 'UUU')
		const expected = 'success'
		expect(result).toBe(expected)
	})

	it('Test 07', () => {
		const board = '\n.....\n.*#.*\n.@...\n.....\n'

		const result = fn(board, 'RR')
		const expected = 'fail'
		expect(result).toBe(expected)
	})
})
