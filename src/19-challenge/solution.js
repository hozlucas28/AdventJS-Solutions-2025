/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
export default function fn(routes) {
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
