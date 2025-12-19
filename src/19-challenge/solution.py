def fn(routes: list[list[str]]) -> list[str]:
    reconstructed_route = [*routes[0]]

    destination = reconstructed_route[-1]

    while destination:
        trip_segment: list[str] = []

        for segment in routes:
            if segment[0] == destination:
                trip_segment = segment
                break

        if not trip_segment:
            break

        destination = trip_segment[1]
        reconstructed_route.append(destination)

    return reconstructed_route
