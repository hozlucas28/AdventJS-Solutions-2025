def fn(gifts: list[int], maxWeight: int) -> int | None:
    if not gifts:
        return 0

    sleighs_remaining_weight: list[int] = [maxWeight]

    for gift_weight in gifts:
        if gift_weight > maxWeight:
            return None

        remaining_weight = sleighs_remaining_weight[-1] - gift_weight
        if remaining_weight >= 0:
            sleighs_remaining_weight[-1] = remaining_weight
            continue

        sleighs_remaining_weight.append(maxWeight - gift_weight)

    return len(sleighs_remaining_weight)
