export default function fn(height: number, ornament: string, frequency: number): string {
	let tree: string = ''
	let asterisksSinceLastOrnament = 0

	for (let i = 0; i < height; i++) {
		let line = ' '.repeat(height - i - 1)

		for (let j = line.length; j < height + i; j++) {
			if ((asterisksSinceLastOrnament + 1) % frequency) {
				line += '*'
				asterisksSinceLastOrnament++
				continue
			}

			line += ornament
			asterisksSinceLastOrnament = 0
		}

		tree += `${line}\n`
	}

	const trunk = `${' '.repeat(Math.max(height - 1, 0))}#`
	tree += trunk

	return tree
}
