import fn from './solution'

describe('Challenge 21: drop gifts in a vertical warehouse and clean filled rows', () => {
	it('Test 01', () => {
		const result = fn(
			[
				['.', '.', '.'],
				['.', '.', '.'],
				['#', '.', '#'],
			],
			[1]
		)

		const expected = [
			['.', '.', '.'],
			['.', '.', '.'],
			['.', '.', '.'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = fn(
			[
				['.', '.', '#'],
				['#', '.', '#'],
				['#', '.', '#'],
			],
			[0, 1, 2]
		)

		const expected = [
			['.', '.', '#'],
			['#', '.', '#'],
			['#', '.', '#'],
		]

		expect(result).toStrictEqual(expected)
	})
})
