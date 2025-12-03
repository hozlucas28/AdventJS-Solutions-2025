export default function fn(size: number, symbol: string): string {
	if (size < 2) return ''

	let wrapper = `${symbol.repeat(size)}\n`

	for (let i = 2; i < size; i++) {
		wrapper += `${symbol}${' '.repeat(size - 2)}${symbol}\n`
	}

	wrapper += `${symbol.repeat(size)}`

	return wrapper
}
