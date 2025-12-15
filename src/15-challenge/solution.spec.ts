import fn from './solution'

describe('Challenge 15: turns an array of objects into a text table', () => {
	it('Test 01', () => {
		const result = fn(
			[
				{ name: 'Charlie', city: 'New York' },
				{ name: 'Alice', city: 'London' },
				{ name: 'Bob', city: 'Paris' },
			],
			'name'
		)

		const expected =
			'+---------+----------+\n| A       | B        |\n+---------+----------+\n| Alice   | London   |\n| Bob     | Paris    |\n| Charlie | New York |\n+---------+----------+'

		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn(
			[
				{ gift: 'Book', quantity: 5 },
				{ gift: 'Music CD', quantity: 1 },
				{ gift: 'Doll', quantity: 10 },
			],
			'quantity'
		)

		const expected =
			'+----------+----+\n| A        | B  |\n+----------+----+\n| Music CD | 1  |\n| Book     | 5  |\n| Doll     | 10 |\n+----------+----+'

		expect(result).toBe(expected)
	})
})
