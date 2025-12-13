/**
 * @typedef {Object} Elf
 * @property {string} actions
 * @property {number} lifePoints
 */

/**
 * @typedef {'A' | 'B' | 'F'} Action
 */

/**
 * @typedef {(victimLifePoints: Elf['lifePoints'], victimCounterAction: Action) => number} ActionResponse
 */

/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
export default function fn(elf1, elf2) {
	/** @type {Elf} */
	let elf01 = {
		actions: elf1,
		lifePoints: 3,
	}

	/** @type {Elf} */
	let elf02 = {
		actions: elf2,
		lifePoints: 3,
	}

	/** @type {Record<Action | (string & {}), ActionResponse>} */
	const actionResponses = {
		A: (victimLifePoints, victimCounterAction) => victimLifePoints - +(victimCounterAction !== 'B'),
		B: (victimLifePoints, _) => victimLifePoints,
		F: (victimLifePoints, _) => victimLifePoints - 2,
		undefined: (victimLifePoints, _) => victimLifePoints,
	}

	const minActionsLength = Math.min(elf01.actions.length, elf02.actions.length)

	for (let actionI = 0; actionI < minActionsLength && elf01.lifePoints && elf02.lifePoints; actionI++) {
		const attacker01Action = elf01.actions[actionI]
		const attacker02Action = elf02.actions[actionI]

		elf02.lifePoints = actionResponses[attacker01Action](elf02.lifePoints, attacker02Action)
		elf01.lifePoints = actionResponses[attacker02Action](elf01.lifePoints, attacker01Action)
	}

	if (elf01.lifePoints > elf02.lifePoints) return 1
	return elf02.lifePoints > elf01.lifePoints ? 2 : 0
}
