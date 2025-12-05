import fn from './solution'

describe('Challenge 05: calculate the remaining seconds until sleigh take off', () => {
	it('Test 01', () => {
		const takeoff = '2025*12*25@00|00|00 NP'

		const result = fn('2025*12*24@23|59|30 NP', takeoff)
		const expected = 30
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const takeoff = '2025*12*25@00|00|00 NP'

		const result = fn('2025*12*25@00|00|00 NP', takeoff)
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const takeoff = '2025*12*25@00|00|00 NP'

		const result = fn('2025*12*25@00|00|12 NP', takeoff)
		const expected = -12
		expect(result).toBe(expected)
	})
})
