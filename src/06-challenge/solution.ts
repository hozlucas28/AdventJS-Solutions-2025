export type Glove = {
	hand: 'L' | 'R'
	color: string
}

export default function fn(gloves: Glove[]): string[] {
	const glovesGroupByColor: Record<string, { left: number; right: number }> = {}

	for (const glove of gloves) {
		glovesGroupByColor[glove.color] ??= { left: 0, right: 0 }
		glovesGroupByColor[glove.color].left += +(glove.hand === 'L')
		glovesGroupByColor[glove.color].right += +(glove.hand === 'R')
	}

	const pairOfGloves: string[] = []

	for (const color in glovesGroupByColor) {
		const hands = glovesGroupByColor[color as keyof typeof glovesGroupByColor]
		const pairs = Math.min(hands.left, hands.right)
		pairs && pairOfGloves.push(...Array.from({ length: pairs }, () => color))
	}

	return pairOfGloves
}
