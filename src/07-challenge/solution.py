def fn(height: int, ornament: str, frequency: int) -> str:
    tree = ""
    asterisks_since_last_ornament = 0

    for i in range(height):
        line = " " * (height - i - 1)

        for i in range(len(line), height + i):
            if (asterisks_since_last_ornament + 1) % frequency:
                line += "*"
                asterisks_since_last_ornament += 1
                continue

            line += ornament
            asterisks_since_last_ornament = 0

        tree += f"{line}\n"

    trunk = f"{" " * max(height - 1, 0)}#"
    tree += trunk

    return tree


fn(5, "o", 2)
