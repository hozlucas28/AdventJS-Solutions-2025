/**
 * @param {string[]} gifts - The array of gifts to filter
 * @returns {string[]} An array with the unique filtered gifts
 */
export default function fn(gifts) {
	const unDefectiveGifts = gifts.filter((gift) => !gift.includes('#'))
	return unDefectiveGifts
}
