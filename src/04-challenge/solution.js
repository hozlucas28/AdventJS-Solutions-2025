export default function fn() {
	const pin = []

	const blocks = code.replaceAll('[', '').split(']')
	blocks.pop()

	const actions = {
		'+': 1,
		'-': -1,
	}

	for (const block of blocks) {
		const number = block[0]

		if (number === '<') {
			pin.length && pin.push(pin[pin.length - 1])
			continue
		}

		let pinNumber = parseInt(number)
		const operations = block.replaceAll(/\d/g, '')

		for (const operation of operations) {
			pinNumber += actions[operation]
		}

		pin.push((pinNumber + 10) % 10)
	}

	return pin.length < 4 ? null : pin.join('')
}
