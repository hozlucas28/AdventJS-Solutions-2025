export default function fn(brackets: string): number {
	const queue: string[] = []
	let deepLevel = -1

	for (const bracket of brackets) {
		if (bracket === '[') {
			queue.push(bracket)
		} else if (queue.length) {
			deepLevel = Math.max(queue.length, deepLevel)
			queue.shift()
		} else return -1
	}

	return queue.length ? -1 : deepLevel
}
