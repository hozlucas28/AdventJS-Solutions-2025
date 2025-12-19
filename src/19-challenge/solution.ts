export default function fn(routes: string[][]): string[] {
	const reconstructedRoute = [...routes[0]]

	let destination = reconstructedRoute.at(-1)

	while (destination) {
		const tripSegment = routes.find(([origin]) => origin === destination)
		if (!tripSegment) break

		destination = tripSegment[1]
		reconstructedRoute.push(destination)
	}

	return reconstructedRoute
}
