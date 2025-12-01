import fn from './solution'

describe('Challenge 01: filter non-defective gifts from the list', () => {
	it('Test 01', () => {
		const gifts = ['car', 'doll#arm', 'ball', '#train']

		const result = fn(gifts)
		const expected = ['car', 'ball']
		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const gifts = ['#broken', '#rusty']

		const result = fn(gifts)
		const expected: any[] = []
		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const gifts: any[] = []

		const result = fn(gifts)
		const expected: any[] = []
		expect(result).toStrictEqual(expected)
	})
})
