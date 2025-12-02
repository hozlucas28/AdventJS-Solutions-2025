export default function fn(giftsToProduce: Array<{ toy: string; quantity: number }>): string[] {
	const giftsArr: string[] = []

	for (const gift of giftsToProduce) {
		if (typeof gift.quantity !== 'number' || gift.quantity < 1) continue
		giftsArr.push(...Array.from({ length: gift.quantity }, () => gift.toy))
	}

	return giftsArr
}
