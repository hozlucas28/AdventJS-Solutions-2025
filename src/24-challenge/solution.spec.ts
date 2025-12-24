import fn from './solution'
import type { BTreeNode } from './solution'

describe('Challenge 24: Verify if the trees are synchronized so that the star can keep shining', () => {
	it('Test 01', () => {
		const tree01: BTreeNode = {
			value: '🎄',
			left: { value: '⭐' },
			right: { value: '🎅' },
		}

		const tree02: BTreeNode = {
			value: '🎄',
			left: { value: '🎅' },
			right: { value: '⭐' },
		}

		const result = fn(tree01, tree02)
		const expected = [true, '🎄']

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const tree01: BTreeNode = {
			value: '🎄',
			left: { value: '⭐' },
			right: { value: '🎅' },
		}

		const tree02: BTreeNode = {
			value: '🎄',
			left: { value: '🎅' },
			right: { value: '🎁' },
		}

		const result = fn(tree01, tree02)
		const expected = [false, '🎄']

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const tree01: BTreeNode = {
			value: '🎄',
			left: { value: '⭐' },
			right: { value: '🎅' },
		}

		const tree02: BTreeNode = {
			value: '🎄',
			left: { value: '⭐' },
			right: { value: '🎅' },
		}

		const result = fn(tree01, tree02)
		const expected = [false, '🎄']

		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const tree01: BTreeNode = { value: '🎅' }

		const tree02: BTreeNode = { value: '🧑‍🎄' }

		const result = fn(tree01, tree02)
		const expected = [false, '🎅']

		expect(result).toStrictEqual(expected)
	})
})
