type Gift = '#'
type EmptySlot = '.'
type WarehouseCell = Gift | EmptySlot

export default function fn(warehouse: WarehouseCell[][], drops: number[]): WarehouseCell[][] {
	const GIFT: Gift = '#'
	const EMPTY_SLOT: EmptySlot = '.'

	const newWarehouse: WarehouseCell[][] = Array.from(warehouse, (row) => [...row])

	for (const drop of drops) {
		let level = 0
		while (level < newWarehouse.length && newWarehouse[level][drop] === EMPTY_SLOT) level++

		level--
		if (level > -1 && level < newWarehouse.length) {
			newWarehouse[level][drop] = GIFT

			if (newWarehouse[level].every((cell) => cell === GIFT)) {
				newWarehouse.unshift(Array.from({ length: newWarehouse[level].length }, () => EMPTY_SLOT))
				newWarehouse.splice(level + 1, 1)
			}
		}
	}

	return newWarehouse
}
