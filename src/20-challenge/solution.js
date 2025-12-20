/**
 * @typedef {'#'} Gift
 * @typedef {'.'} EmptySlot
 * @typedef {Gift | EmptySlot} WarehouseCell
 */

/**
 * @param {WarehouseCell[][]} warehouse
 * @param {number[]} drops
 * @returns {WarehouseCell[][]}
 */
export default function fn(warehouse, drops) {
	/** @type {Gift} */
	const GIFT = '#'

	/** @type {EmptySlot} */
	const EMPTY_SLOT = '.'

	/** @type {WarehouseCell[][]} */
	const newWarehouse = Array.from(warehouse, (row) => [...row])

	for (const drop of drops) {
		let level = 0
		while (level < newWarehouse.length && newWarehouse[level][drop] === EMPTY_SLOT) level++

		level--
		if (level > -1 && level < newWarehouse.length) newWarehouse[level][drop] = GIFT
	}

	return newWarehouse
}
