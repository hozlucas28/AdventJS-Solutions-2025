type Elf = {
	actions: string
	lifePoints: number
}

type Action = 'A' | 'B' | 'F'
type ActionResponse = (victimLifePoints: Elf['lifePoints'], victimCounterAction: Action) => number

export default function fn(elf1: string, elf2: string): number {
	let elf01: Elf = {
		actions: elf1,
		lifePoints: 3,
	}

	let elf02: Elf = {
		actions: elf2,
		lifePoints: 3,
	}

	const actionResponses: Record<Action | (string & {}), ActionResponse> = {
		A: (victimLifePoints, victimCounterAction) => victimLifePoints - +(victimCounterAction !== 'B'),
		B: (victimLifePoints, _) => victimLifePoints,
		F: (victimLifePoints, _) => victimLifePoints - 2,
		undefined: (victimLifePoints, _) => victimLifePoints,
	}

	const minActionsLength = Math.min(elf01.actions.length, elf02.actions.length)

	for (let actionI = 0; actionI < minActionsLength && elf01.lifePoints && elf02.lifePoints; actionI++) {
		const elf01Action = elf01.actions[actionI]
		const elf02Action = elf02.actions[actionI]

		elf02.lifePoints = actionResponses[elf01Action](elf02.lifePoints, elf02Action as Action)
		elf01.lifePoints = actionResponses[elf02Action](elf01.lifePoints, elf01Action as Action)
	}

	if (elf01.lifePoints > elf02.lifePoints) return 1
	return elf02.lifePoints > elf01.lifePoints ? 2 : 0
}
