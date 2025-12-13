type Gift = string | number | boolean
type Workshop = Record<string, any>

type Path = string[]

export default function fn(workshop: Workshop, gift: Gift): Path {
	for (const key in workshop) {
		const value = workshop[key]

		if (typeof value !== 'object') {
			if (value === gift) return [key]
		} else {
			const innerKeyPath = [key, ...fn(value, gift)]
			if (innerKeyPath.length !== 1) return innerKeyPath
		}
	}

	return []
}
