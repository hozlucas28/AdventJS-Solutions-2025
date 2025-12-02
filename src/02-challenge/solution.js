/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
export default function fn(giftsToProduce) {
	/** @type {string[]} */
	const giftsArr = []

	for (const gift of giftsToProduce) {
		if (typeof gift.quantity !== 'number' || gift.quantity < 1) continue
		giftsArr.push(...Array.from({ length: gift.quantity }, () => gift.toy))
	}

	return giftsArr
}
