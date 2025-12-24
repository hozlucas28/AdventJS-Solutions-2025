export type BTreeNode = {
	value: string
	left?: BTreeNode
	right?: BTreeNode
}

export default function fn(tree01?: BTreeNode, tree02?: BTreeNode): [boolean, string] {
	if (!tree01 && !tree02) return [true, '']
	if (!tree01 || !tree02) return [false, tree01?.value ?? '']

	if (tree01.value !== tree02.value) return [false, tree01.value]

	const isLeftSynchronized = fn(tree01.left, tree02.right)[0]
	const isRightSynchronized = fn(tree01.right, tree02.left)[0]

	return [isLeftSynchronized && isRightSynchronized, tree01.value]
}
