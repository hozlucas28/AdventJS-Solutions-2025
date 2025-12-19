import fn from './solution'

describe('Challenge 19: reconstruct the complete route from the origin to the final destination', () => {
	it('Test 01', () => {
		const result = fn([
			['MEX', 'CAN'],
			['UK', 'GER'],
			['CAN', 'UK'],
		])

		const expected = ['MEX', 'CAN', 'UK', 'GER']

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = fn([
			['USA', 'BRA'],
			['JPN', 'PHL'],
			['BRA', 'UAE'],
			['UAE', 'JPN'],
			['CMX', 'HKN'],
		])

		const expected = ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = fn([
			['STA', 'HYD'],
			['ESP', 'CHN'],
		])

		const expected = ['STA', 'HYD']

		expect(result).toStrictEqual(expected)
	})
})
