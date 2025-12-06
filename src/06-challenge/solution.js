/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
export default function fn(gloves) {
	const glovesGroupByColor = {}

	for (const glove of gloves) {
		glovesGroupByColor[glove.color] ??= { left: 0, right: 0 }
		glovesGroupByColor[glove.color].left += +(glove.hand === 'L')
		glovesGroupByColor[glove.color].right += +(glove.hand === 'R')
	}

	const pairOfGloves = []

	for (const color in glovesGroupByColor) {
		const hands = glovesGroupByColor[color]
		const pairs = Math.min(hands.left, hands.right)
		pairs && pairOfGloves.push(...Array.from({ length: pairs }, () => color))
	}

	return pairOfGloves
}
