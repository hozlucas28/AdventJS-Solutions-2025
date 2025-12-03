def fn(size: int, symbol: str):
    if size < 2:
        return ""

    wrapper: str = f"{symbol * size}\n"

    for _ in range(size - 2):
        wrapper += f"{symbol}{" " * (size - 2)}{symbol}\n"

    wrapper += f"{symbol * size}"

    return wrapper
