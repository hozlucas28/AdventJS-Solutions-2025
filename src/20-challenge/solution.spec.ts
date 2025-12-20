import fn from './solution'

describe('Challenge 20: drop gifts in a vertical warehouse', () => {
	it('Test 01', () => {
		const result = fn(
			[
				['.', '.', '.'],
				['.', '#', '.'],
				['#', '#', '.'],
			],
			[0]
		)

		const expected = [
			['.', '.', '.'],
			['#', '#', '.'],
			['#', '#', '.'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = fn(
			[
				['.', '.', '.'],
				['#', '#', '.'],
				['#', '#', '#'],
			],
			[0, 2]
		)

		const expected = [
			['#', '.', '.'],
			['#', '#', '#'],
			['#', '#', '#'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = fn(
			[
				['.', '.', '.'],
				['.', '.', '.'],
				['.', '.', '.'],
			],
			[0, 1, 2]
		)

		const expected = [
			['.', '.', '.'],
			['.', '.', '.'],
			['#', '#', '#'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const result = fn(
			[
				['#', '#'],
				['#', '#'],
			],
			[0, 0]
		)

		const expected = [
			['#', '#'],
			['#', '#'],
		]

		expect(result).toStrictEqual(expected)
	})
})
