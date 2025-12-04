def fn(code: str) -> str | None:
    pin: list[str] = []
    blocks = code.replace("[", "").split("]")[:-1]

    actions = {
        "+": 1,
        "-": -1,
    }

    for block in blocks:
        number = block[0]

        if number == "<":
            if pin:
                pin.append(pin[-1])
            continue

        pin_number = int(number)
        operations = block[1:]

        for operation in operations:
            pin_number += actions[operation]

        pin.append(f"{(pin_number + 10) % 10}")

    return None if len(pin) < 4 else "".join(pin)
