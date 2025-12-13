import fn from './solution'

describe('Challenge 14: find the path of keys to find a specific present', () => {
	it('Test 01', () => {
		const workshop = {
			storage: {
				shelf: {
					box1: 'train',
					box2: 'switch',
				},
				box: 'car',
			},
			gift: 'doll',
		}

		const result = fn(workshop, 'train')
		const expected = ['storage', 'shelf', 'box1']
		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const workshop = {
			storage: {
				shelf: {
					box1: 'train',
					box2: 'switch',
				},
				box: 'car',
			},
			gift: 'doll',
		}

		const result = fn(workshop, 'switch')
		const expected = ['storage', 'shelf', 'box2']
		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const workshop = {
			storage: {
				shelf: {
					box1: 'train',
					box2: 'switch',
				},
				box: 'car',
			},
			gift: 'doll',
		}

		const result = fn(workshop, 'car')
		const expected = ['storage', 'box']
		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const workshop = {
			storage: {
				shelf: {
					box1: 'train',
					box2: 'switch',
				},
				box: 'car',
			},
			gift: 'doll',
		}

		const result = fn(workshop, 'doll')
		const expected = ['gift']
		expect(result).toStrictEqual(expected)
	})

	it('Test 05', () => {
		const workshop = {
			storage: {
				shelf: {
					box1: 'train',
					box2: 'switch',
				},
				box: 'car',
			},
			gift: 'doll',
		}

		const result = fn(workshop, 'plane')
		const expected: string[] = []
		expect(result).toStrictEqual(expected)
	})
})
