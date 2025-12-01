export default function fn(gifts: string[]): string[] {
	const unDefectiveGifts = gifts.filter((gift) => !gift.includes('#'))
	return unDefectiveGifts
}
