/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
export default function fn(gifts, maxWeight) {
	if (!gifts.length) return 0

	/** @type {number[]} */
	const sleighsRemainingWeight = [maxWeight]

	for (const giftWeight of gifts) {
		if (giftWeight > maxWeight) return null

		const remainingWeight = sleighsRemainingWeight.at(-1) - giftWeight
		if (remainingWeight >= 0) {
			sleighsRemainingWeight[sleighsRemainingWeight.length - 1] = remainingWeight
			continue
		}

		sleighsRemainingWeight.push(maxWeight - giftWeight)
	}

	return sleighsRemainingWeight.length
}
