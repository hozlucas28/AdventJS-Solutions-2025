/**
 * @typedef {Object} BTreeNode
 * @property {string} value
 * @property {BTreeNode | undefined} left
 * @property {BTreeNode | undefined} right
 */

/**
 * @param {BTreeNode | undefined} tree01 - The first binary tree.
 * @param {BTreeNode | undefined} tree02 - The second binary tree.
 * @returns {[boolean, string]}
 */
export default function fn(tree01, tree02) {
	if (!tree01 && !tree02) return [true, '']
	if (!tree01 || !tree02) return [false, tree01?.value ?? '']

	if (tree01.value !== tree02.value) return [false, tree01.value]

	const isLeftSynchronized = fn(tree01.left, tree02.right)[0]
	const isRightSynchronized = fn(tree01.right, tree02.left)[0]

	return [isLeftSynchronized && isRightSynchronized, tree01.value]
}
