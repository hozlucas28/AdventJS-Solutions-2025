type Gifts = number[]
type MaxWeight = number
type Result = number | null

export default function fn(gifts: Gifts, maxWeight: MaxWeight): Result {
	if (!gifts.length) return 0

	const sleighsRemainingWeight: number[] = [maxWeight]

	for (const giftWeight of gifts) {
		if (giftWeight > maxWeight) return null

		const remainingWeight = sleighsRemainingWeight.at(-1)! - giftWeight
		if (remainingWeight >= 0) {
			sleighsRemainingWeight[sleighsRemainingWeight.length - 1] = remainingWeight
			continue
		}

		sleighsRemainingWeight.push(maxWeight - giftWeight)
	}

	return sleighsRemainingWeight.length
}
